import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "..");
const DATA_ROOT = path.resolve(PROJECT_ROOT, "..", "Services-Data");

const STRAPI_URL = process.env.STRAPI_URL?.replace(/\/$/, "");
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

function buildBaseUrls(rawUrl) {
  if (!rawUrl) return [];

  const primary = new URL(rawUrl);
  const urls = [primary.toString().replace(/\/$/, "")];

  // Node fetch on some Windows setups may fail on localhost/IPv6 resolution.
  if (primary.hostname === "localhost") {
    const ipv4 = new URL(primary.toString());
    ipv4.hostname = "127.0.0.1";
    urls.push(ipv4.toString().replace(/\/$/, ""));
  }

  return urls;
}

const STRAPI_BASE_URLS = buildBaseUrls(STRAPI_URL);

const LOCALES = {
  EN: "en",
  AR: "ar",
};

const LIMITS = {
  consulting: 10,
  categories: 10,
  servicesPerCategory: 5,
};

const UIDS = {
  legalCategory: "api::legal-service-category.legal-service-category",
  legalService: "api::legal-sub-service.legal-sub-service",
  consulting: "api::consulting-service.consulting-service",
};

const DATA_FILES = {
  consultingEn: path.join(
    DATA_ROOT,
    "Consulting",
    "consulting_services_en.json",
  ),
  consultingAr: path.join(
    DATA_ROOT,
    "Consulting",
    "consulting_services_ar.json",
  ),
  categoriesEn: path.join(
    DATA_ROOT,
    "Legal Services",
    "Categories",
    "administration_categories_with_services_count_en.json",
  ),
  categoriesAr: path.join(
    DATA_ROOT,
    "Legal Services",
    "Categories",
    "administration_categories_with_services_count_ar.json",
  ),
  servicesEn: path.join(
    DATA_ROOT,
    "Legal Services",
    "Services",
    "administration_categories_with_full_services_en.json",
  ),
  servicesAr: path.join(
    DATA_ROOT,
    "Legal Services",
    "Services",
    "administration_categories_with_full_services_ar.json",
  ),
};

function requiredEnv(name, value) {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
}

async function readJSON(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

function keyByFallback(item, keys) {
  for (const key of keys) {
    const value = item?.[key];
    if (value !== undefined && value !== null && value !== "") {
      return String(value);
    }
  }
  return undefined;
}

function uniqueBy(items, keyGetter) {
  const seen = new Set();
  const out = [];

  for (const item of items) {
    const key = keyGetter(item);
    if (!key || seen.has(key)) {
      continue;
    }
    seen.add(key);
    out.push(item);
  }

  return out;
}

function toList(value) {
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object" && Array.isArray(value.categories)) {
    return value.categories;
  }
  return [];
}

function makeServiceFromSource(rawService) {
  const details = rawService?.serviceDetails ?? {};

  const description = details.serviceDescription
    ? [
        {
          title: "Service description",
          description: details.serviceDescription,
        },
      ]
    : rawService.description;

  const requirements = Array.isArray(details.requiredDocuments)
    ? details.requiredDocuments.map((item) => ({ requirement: String(item) }))
    : rawService.requirements;

  const documents = Array.isArray(details.requiredDocuments)
    ? details.requiredDocuments.map((item) => ({ document: String(item) }))
    : rawService.documents;

  const conditions = Array.isArray(details.serviceConditions)
    ? details.serviceConditions.map((item) => ({ condition: String(item) }))
    : rawService.conditions;

  return {
    documentId: rawService.documentId,
    serviceId: rawService.serviceId,
    slug: rawService.slug,
    name: rawService.name,
    shortDescription: rawService.shortDescription ?? details.serviceDescription,
    button_label: rawService.button_label,
    currency: details.currency ?? rawService.currency,
    startFromPrice:
      details.serviceFee !== undefined
        ? details.serviceFee
        : rawService.startFromPrice,
    finishPeriodMin:
      details.durationDays !== undefined
        ? details.durationDays
        : rawService.finishPeriodMin,
    finishPeriodMax:
      details.durationMax !== undefined
        ? details.durationMax
        : rawService.finishPeriodMax,
    order: rawService.order,
    icon: rawService.icon,
    description,
    requirements,
    documents,
    conditions,
    steps: rawService.steps,
    benefits: rawService.benefits,
  };
}

function limitData({
  consultingEn,
  consultingAr,
  categoriesEn,
  categoriesAr,
  servicesEn,
  servicesAr,
}) {
  const enConsulting = toList(consultingEn).slice(0, LIMITS.consulting);
  const arConsultingMap = new Map(
    toList(consultingAr).map((item) => [
      keyByFallback(item, ["documentId", "slug", "name"]),
      item,
    ]),
  );

  const consultingPairs = enConsulting.map((enItem, index) => {
    const key = keyByFallback(enItem, ["documentId", "slug", "name"]);
    const arItem =
      arConsultingMap.get(key) ?? toList(consultingAr)[index] ?? null;
    return { key, en: enItem, ar: arItem };
  });

  const enCategories = toList(categoriesEn).slice(0, LIMITS.categories);
  const arCategoriesMap = new Map(
    toList(categoriesAr).map((item) => [
      keyByFallback(item, [
        "documentId",
        "categoryId",
        "category_id",
        "slug",
        "name",
      ]),
      item,
    ]),
  );

  const categoryPairs = enCategories.map((enItem, index) => {
    const key = keyByFallback(enItem, [
      "documentId",
      "categoryId",
      "category_id",
      "slug",
      "name",
    ]);
    const arItem =
      arCategoriesMap.get(key) ?? toList(categoriesAr)[index] ?? null;
    return {
      key,
      en: enItem,
      ar: arItem,
    };
  });

  const selectedCategoryKeys = new Set(categoryPairs.map((item) => item.key));
  const enServicesByCategory = new Map(
    toList(servicesEn).map((cat) => [
      keyByFallback(cat, [
        "categoryId",
        "category_id",
        "documentId",
        "categorySlug",
        "categoryName",
      ]),
      cat,
    ]),
  );
  const arServicesByCategory = new Map(
    toList(servicesAr).map((cat) => [
      keyByFallback(cat, [
        "categoryId",
        "category_id",
        "documentId",
        "categorySlug",
        "categoryName",
      ]),
      cat,
    ]),
  );

  const servicesPairs = [];

  for (const category of categoryPairs) {
    if (!selectedCategoryKeys.has(category.key)) continue;

    const enCategoryServices = toList(
      enServicesByCategory.get(category.key)?.services ?? [],
    );
    const arCategoryServices = toList(
      arServicesByCategory.get(category.key)?.services ?? [],
    );

    const uniqueEnServices = uniqueBy(enCategoryServices, (item) =>
      keyByFallback(item, ["serviceId", "documentId", "slug", "name"]),
    ).slice(0, LIMITS.servicesPerCategory);

    const arMap = new Map(
      arCategoryServices.map((item) => [
        keyByFallback(item, ["serviceId", "documentId", "slug", "name"]),
        item,
      ]),
    );

    for (let i = 0; i < uniqueEnServices.length; i += 1) {
      const enServiceRaw = uniqueEnServices[i];
      const serviceKey = keyByFallback(enServiceRaw, [
        "serviceId",
        "documentId",
        "slug",
        "name",
      ]);
      const arServiceRaw =
        arMap.get(serviceKey) ?? arCategoryServices[i] ?? null;

      servicesPairs.push({
        key: `${category.key}:${serviceKey}`,
        categoryKey: category.key,
        en: makeServiceFromSource(enServiceRaw),
        ar: arServiceRaw ? makeServiceFromSource(arServiceRaw) : null,
      });
    }
  }

  return {
    consultingPairs,
    categoryPairs,
    servicesPairs,
  };
}

function buildHeaders() {
  return {
    Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    "Content-Type": "application/json",
  };
}

async function apiRequest(pathname, { method = "GET", query, body } = {}) {
  let lastNetworkError = null;

  for (const baseUrl of STRAPI_BASE_URLS) {
    const url = new URL(pathname, `${baseUrl}/`);

    if (query) {
      for (const [key, value] of Object.entries(query)) {
        if (value === undefined || value === null) continue;
        url.searchParams.set(key, String(value));
      }
    }

    let response;
    try {
      response = await fetch(url, {
        method,
        headers: buildHeaders(),
        body: body ? JSON.stringify(body) : undefined,
        signal: AbortSignal.timeout(15000),
      });
    } catch (error) {
      lastNetworkError = error;
      continue;
    }

    const text = await response.text();
    let payload = null;
    try {
      payload = text ? JSON.parse(text) : null;
    } catch {
      payload = null;
    }

    if (!response.ok) {
      const message =
        payload?.error?.message ?? `${response.status} ${response.statusText}`;
      const details = payload?.error?.details
        ? ` | ${JSON.stringify(payload.error.details)}`
        : "";
      throw new Error(
        `API request failed [${method} ${url.pathname}]: ${message}${details}`,
      );
    }

    return payload;
  }

  const causeMessage =
    lastNetworkError?.cause?.message ||
    lastNetworkError?.message ||
    "Unknown network error";
  throw new Error(`Network request failed for ${pathname}: ${causeMessage}`);
}

async function walkJsonFiles(rootDir) {
  const files = [];

  async function walk(current) {
    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".json")) {
        files.push(fullPath);
      }
    }
  }

  await walk(rootDir);
  return files;
}

async function loadLocalContentTypeSchemas() {
  const apiRoot = path.join(PROJECT_ROOT, "src", "api");
  const files = await walkJsonFiles(apiRoot);
  const schemas = new Map();

  for (const filePath of files) {
    if (!filePath.endsWith(`${path.sep}schema.json`)) continue;

    const json = await readJSON(filePath);
    const singular = json?.info?.singularName;
    if (!singular) continue;

    const uid = `api::${singular}.${singular}`;
    schemas.set(uid, json);
  }

  return schemas;
}

async function loadComponentSchemas() {
  const componentsRoot = path.join(PROJECT_ROOT, "src", "components");
  const files = await walkJsonFiles(componentsRoot);
  const componentSchemas = new Map();

  for (const filePath of files) {
    const relative = path.relative(componentsRoot, filePath);
    const parts = relative.split(path.sep);
    if (parts.length !== 2 || !parts[1].endsWith(".json")) continue;

    const category = parts[0];
    const name = parts[1].replace(/\.json$/, "");
    const uid = `${category}.${name}`;
    const schema = await readJSON(filePath);
    componentSchemas.set(uid, schema);
  }

  return componentSchemas;
}

async function tryFetchSchemaViaRest(uid) {
  const endpoints = [
    `/content-type-builder/content-types/${encodeURIComponent(uid)}`,
    "/content-type-builder/content-types",
    "/api/content-type-builder/content-types",
  ];

  for (const endpoint of endpoints) {
    try {
      const payload = await apiRequest(endpoint);
      if (payload?.data?.schema?.uid === uid) {
        return payload.data.schema;
      }

      const candidates = Array.isArray(payload?.data)
        ? payload.data
        : Array.isArray(payload?.data?.contentTypes)
          ? payload.data.contentTypes
          : [];

      for (const candidate of candidates) {
        const schema = candidate?.schema ?? candidate;
        if (schema?.uid === uid) {
          return schema;
        }
      }
    } catch {
      // Best effort only; fallback to local schema files.
    }
  }

  return null;
}

async function getSchemasForUids(uids) {
  const localSchemas = await loadLocalContentTypeSchemas();
  const contentTypeSchemas = new Map();

  for (const uid of uids) {
    const remote = await tryFetchSchemaViaRest(uid);
    const local = localSchemas.get(uid);
    const schema = remote ?? local;

    if (!schema) {
      throw new Error(`Could not resolve schema for ${uid}`);
    }

    contentTypeSchemas.set(uid, schema);
  }

  return contentTypeSchemas;
}

function getEndpointFromSchema(schema) {
  return schema?.info?.pluralName;
}

function findUniqueField(schema) {
  const attrs = schema?.attributes ?? {};
  const uidField = Object.keys(attrs).find((key) => attrs[key]?.type === "uid");
  if (uidField) return uidField;

  const nameField = Object.keys(attrs).find(
    (key) =>
      ["string", "text"].includes(attrs[key]?.type) && attrs[key]?.required,
  );
  if (nameField) return nameField;

  return Object.keys(attrs).find((key) =>
    ["string", "text"].includes(attrs[key]?.type),
  );
}

function findRelationFieldToTarget(schema, targetUid) {
  const attrs = schema?.attributes ?? {};
  return Object.keys(attrs).find(
    (key) =>
      attrs[key]?.type === "relation" && attrs[key]?.target === targetUid,
  );
}

function safeNumber(value) {
  if (value === null || value === undefined || value === "") return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function trimToMaxLength(value, maxLength) {
  if (typeof value !== "string") return value;
  if (!Number.isInteger(maxLength) || maxLength <= 0) return value;
  return value.length > maxLength ? value.slice(0, maxLength) : value;
}

const UID_ALLOWED_RE = /^[A-Za-z0-9-_.~]*$/;

function sanitizeUidCandidate(value) {
  if (value === undefined || value === null) return "";

  return String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9-_.~]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function withLocaleUidSuffix(uidValue, locale) {
  if (typeof uidValue !== "string" || uidValue.length === 0) return uidValue;
  if (!locale || locale === LOCALES.EN) return uidValue;

  const suffix = `-${locale}`;
  return uidValue.endsWith(suffix) ? uidValue : `${uidValue}${suffix}`;
}

function resolveUidValue(data, field, attr) {
  const direct = data[field];
  if (
    typeof direct === "string" &&
    UID_ALLOWED_RE.test(direct) &&
    direct.length > 0
  ) {
    return direct;
  }

  const targetField = attr?.targetField;
  const fromTarget = targetField ? sanitizeUidCandidate(data[targetField]) : "";
  if (fromTarget) return fromTarget;

  const fallbackCandidates = [
    data.documentId,
    data.serviceId,
    data.category_id,
    data.categoryId,
    data.name,
    data.title,
    data.order,
  ];

  for (const candidate of fallbackCandidates) {
    const sanitized = sanitizeUidCandidate(candidate);
    if (sanitized) return sanitized;
  }

  return `seed-${Date.now()}`;
}

function sanitizeComponentItem(item, componentSchema) {
  if (!item || typeof item !== "object") return null;

  const out = {};
  const attrs = componentSchema?.attributes ?? {};

  for (const [field, attr] of Object.entries(attrs)) {
    const value = item[field];
    if (value === undefined) continue;

    if (attr.type === "media") {
      if (typeof value === "number") out[field] = value;
      if (Array.isArray(value) && value.every((v) => typeof v === "number"))
        out[field] = value;
      continue;
    }

    if (["integer", "biginteger", "decimal", "float"].includes(attr.type)) {
      const num = safeNumber(value);
      if (num !== null) out[field] = num;
      continue;
    }

    if (attr.type === "boolean") {
      if (typeof value === "boolean") out[field] = value;
      continue;
    }

    if (typeof value === "object") continue;
    if (typeof value === "string") {
      // Strapi default string type uses varchar(255), use 255 as fallback
      const maxLen =
        attr?.maxLength ?? (attr.type === "string" ? 255 : undefined);
      out[field] = trimToMaxLength(value, maxLen);
    } else {
      out[field] = value;
    }
  }

  return Object.keys(out).length > 0 ? out : null;
}

function sanitizeDataBySchema(data, schema, componentSchemas) {
  const out = {};
  const attrs = schema?.attributes ?? {};

  for (const [field, attr] of Object.entries(attrs)) {
    const value = data[field];
    if (value === undefined) continue;

    if (attr.type === "relation") {
      if (typeof value === "number" || typeof value === "string") {
        out[field] = value;
      } else if (
        Array.isArray(value) &&
        value.every((v) => typeof v === "number" || typeof v === "string")
      ) {
        out[field] = value;
      } else if (
        value &&
        typeof value === "object" &&
        typeof value.id === "number"
      ) {
        out[field] = value.id;
      } else if (
        value &&
        typeof value === "object" &&
        typeof value.documentId === "string"
      ) {
        out[field] = value.documentId;
      }
      continue;
    }

    if (attr.type === "component") {
      const componentSchema = componentSchemas.get(attr.component);
      if (!componentSchema) continue;

      if (attr.repeatable && Array.isArray(value)) {
        const sanitized = value
          .map((item) => sanitizeComponentItem(item, componentSchema))
          .filter(Boolean);
        if (sanitized.length > 0) out[field] = sanitized;
      } else if (!attr.repeatable && value && typeof value === "object") {
        const sanitized = sanitizeComponentItem(value, componentSchema);
        if (sanitized) out[field] = sanitized;
      }
      continue;
    }

    if (attr.type === "media") {
      if (typeof value === "number") out[field] = value;
      if (Array.isArray(value) && value.every((v) => typeof v === "number"))
        out[field] = value;
      continue;
    }

    if (attr.type === "uid") {
      const uidValue = resolveUidValue(data, field, attr);
      if (uidValue) out[field] = uidValue;
      continue;
    }

    if (["integer", "biginteger", "decimal", "float"].includes(attr.type)) {
      const num = safeNumber(value);
      if (num !== null) out[field] = num;
      continue;
    }

    if (attr.type === "boolean") {
      if (typeof value === "boolean") out[field] = value;
      continue;
    }

    if (attr.type === "json") {
      if (value !== undefined) out[field] = value;
      continue;
    }

    if (value === null || typeof value !== "object") {
      if (typeof value === "string") {
        out[field] = trimToMaxLength(value, attr?.maxLength);
      } else {
        out[field] = value;
      }
    }
  }

  return out;
}

function selectLocalizationData(
  data,
  schema,
  baseData = {},
  locale = LOCALES.AR,
) {
  const out = {};
  const attrs = schema?.attributes ?? {};

  for (const [field, attr] of Object.entries(attrs)) {
    const isLocalized = attr?.pluginOptions?.i18n?.localized === true;
    const isRelation = attr.type === "relation";
    const hasDataValue = field in data;
    const hasBaseValue = field in baseData;

    if (isLocalized || isRelation) {
      if (!hasDataValue) continue;
      out[field] = data[field];
      continue;
    }

    // Some non-localized fields are required in Strapi v5 updates (e.g. uid fields).
    if (attr.required || attr.type === "uid") {
      if (attr.type === "uid") {
        const sourceUid = hasDataValue
          ? data[field]
          : hasBaseValue
            ? baseData[field]
            : undefined;
        if (sourceUid !== undefined) {
          out[field] = withLocaleUidSuffix(String(sourceUid), locale);
        }
        continue;
      }

      if (hasDataValue) {
        out[field] = data[field];
      } else if (hasBaseValue) {
        out[field] = baseData[field];
      }
    }
  }

  return out;
}

function linkRelations(entryData, relationField, relationValue) {
  if (!relationField || relationValue === undefined || relationValue === null) {
    return entryData;
  }

  return {
    ...entryData,
    [relationField]: relationValue,
  };
}

async function findExistingByField(endpoint, locale, field, value) {
  if (!field || value === undefined || value === null || value === "") {
    return null;
  }

  const payload = await apiRequest(`/api/${endpoint}`, {
    query: {
      locale,
      [`filters[$and][0][${field}][$eq]`]: String(value),
      "pagination[pageSize]": 1,
    },
  });

  return payload?.data?.[0] ?? null;
}

async function findLocalizationByDocument(endpoint, documentId, locale) {
  const payload = await apiRequest(`/api/${endpoint}`, {
    query: {
      locale: "all",
      "filters[$and][0][documentId][$eq]": documentId,
      "pagination[pageSize]": 1,
    },
  });

  return payload?.data?.find((item) => item?.locale === locale) ?? null;
}

async function createEntry(endpoint, locale, data) {
  const payload = await apiRequest(`/api/${endpoint}`, {
    method: "POST",
    query: {
      locale,
    },
    body: {
      data,
    },
  });

  return payload?.data;
}

async function createLocalization(endpoint, documentId, locale, data) {
  const payload = await apiRequest(
    `/api/${endpoint}/${encodeURIComponent(documentId)}`,
    {
      method: "PUT",
      query: {
        locale,
      },
      body: {
        data: {
          ...data,
        },
      },
    },
  );

  return payload?.data;
}

function titleForLog(entry, fallback = "Entry") {
  return entry?.name ?? entry?.title ?? entry?.slug ?? fallback;
}

async function ensureLocalizedEntity({
  endpoint,
  schema,
  componentSchemas,
  enSource,
  arSource,
  relation,
}) {
  const uniqueField = findUniqueField(schema);
  const enWithRelation = relation
    ? linkRelations(enSource, relation.field, relation.enId)
    : enSource;
  const sanitizedEn = sanitizeDataBySchema(
    enWithRelation,
    schema,
    componentSchemas,
  );

  const uniqueValue = sanitizedEn[uniqueField];
  let enEntity = await findExistingByField(
    endpoint,
    LOCALES.EN,
    uniqueField,
    uniqueValue,
  );

  if (!enEntity) {
    enEntity = await createEntry(endpoint, LOCALES.EN, sanitizedEn);
  }

  let arEntity = await findLocalizationByDocument(
    endpoint,
    enEntity.documentId,
    LOCALES.AR,
  );
  if (!arEntity && arSource) {
    const arWithRelation = relation
      ? linkRelations(arSource, relation.field, relation.arId)
      : arSource;
    const sanitizedArFull = sanitizeDataBySchema(
      arWithRelation,
      schema,
      componentSchemas,
    );
    const localizedAr = selectLocalizationData(
      sanitizedArFull,
      schema,
      sanitizedEn,
      LOCALES.AR,
    );

    arEntity = await createLocalization(
      endpoint,
      enEntity.documentId,
      LOCALES.AR,
      localizedAr,
    );
  }

  return { en: enEntity, ar: arEntity };
}

function toCategorySource(raw) {
  return {
    documentId: raw.documentId,
    name: raw.name,
    slug: raw.slug,
    description: raw.description,
    order: raw.order,
    button_label: raw.button_label,
    icon: raw.icon,
  };
}

function toConsultingSource(raw) {
  return {
    documentId: raw.documentId,
    name: raw.name,
    slug: raw.slug,
    shortDescription: raw.shortDescription,
    button_label: raw.button_label,
    currency: raw.currency,
    startFromPrice: raw.startFromPrice,
    finishPeriodMin: raw.finishPeriodMin,
    finishPeriodMax: raw.finishPeriodMax,
    order: raw.order,
    icon: raw.icon,
    description: raw.description,
    requirements: raw.requirements,
    benefits: raw.benefits,
    steps: raw.steps,
  };
}

async function seed() {
  requiredEnv("STRAPI_URL", STRAPI_URL);
  requiredEnv("STRAPI_API_TOKEN", STRAPI_API_TOKEN);

  const [
    consultingEn,
    consultingAr,
    categoriesEn,
    categoriesAr,
    servicesEn,
    servicesAr,
    componentSchemas,
  ] = await Promise.all([
    readJSON(DATA_FILES.consultingEn),
    readJSON(DATA_FILES.consultingAr),
    readJSON(DATA_FILES.categoriesEn),
    readJSON(DATA_FILES.categoriesAr),
    readJSON(DATA_FILES.servicesEn),
    readJSON(DATA_FILES.servicesAr),
    loadComponentSchemas(),
  ]);

  const limited = limitData({
    consultingEn,
    consultingAr,
    categoriesEn,
    categoriesAr,
    servicesEn,
    servicesAr,
  });

  const schemas = await getSchemasForUids([
    UIDS.legalCategory,
    UIDS.legalService,
    UIDS.consulting,
  ]);

  const categorySchema = schemas.get(UIDS.legalCategory);
  const serviceSchema = schemas.get(UIDS.legalService);
  const consultingSchema = schemas.get(UIDS.consulting);

  const categoryEndpoint = getEndpointFromSchema(categorySchema);
  const serviceEndpoint = getEndpointFromSchema(serviceSchema);
  const consultingEndpoint = getEndpointFromSchema(consultingSchema);

  if (!categoryEndpoint || !serviceEndpoint || !consultingEndpoint) {
    throw new Error(
      "Could not resolve one or more API endpoints from content-type schemas.",
    );
  }

  const serviceCategoryRelation = findRelationFieldToTarget(
    serviceSchema,
    UIDS.legalCategory,
  );
  if (!serviceCategoryRelation) {
    throw new Error(
      `Could not infer relation field from ${UIDS.legalService} to ${UIDS.legalCategory}.`,
    );
  }

  const categoryMap = new Map();

  for (const pair of limited.categoryPairs) {
    const entities = await ensureLocalizedEntity({
      endpoint: categoryEndpoint,
      schema: categorySchema,
      componentSchemas,
      enSource: toCategorySource(pair.en),
      arSource: pair.ar ? toCategorySource(pair.ar) : null,
    });

    categoryMap.set(pair.key, entities);
    console.log(
      `✔ Category created: ${titleForLog(entities.en, titleForLog(pair.en))}`,
    );
    if (entities.ar) {
      console.log(`✔ Category localized (ar): ${titleForLog(entities.ar)}`);
    }
  }

  if (limited.servicesPairs.length === 0) {
    console.warn(
      "No legal services selected after limiting; check category key mapping in source JSON.",
    );
  }

  for (const pair of limited.servicesPairs) {
    const category = categoryMap.get(pair.categoryKey);
    if (!category?.en?.id) {
      console.warn(
        `Skipping service '${pair.en?.name}' because category is missing.`,
      );
      continue;
    }

    const entities = await ensureLocalizedEntity({
      endpoint: serviceEndpoint,
      schema: serviceSchema,
      componentSchemas,
      enSource: pair.en,
      arSource: pair.ar,
      relation: {
        field: serviceCategoryRelation,
        enId: category.en?.documentId,
        arId: category.ar?.documentId ?? category.en?.documentId,
      },
    });

    console.log(
      `✔ Service created: ${titleForLog(entities.en, titleForLog(pair.en))}`,
    );
    if (entities.ar) {
      console.log(`✔ Service localized (ar): ${titleForLog(entities.ar)}`);
    }
  }

  for (const pair of limited.consultingPairs) {
    const entities = await ensureLocalizedEntity({
      endpoint: consultingEndpoint,
      schema: consultingSchema,
      componentSchemas,
      enSource: toConsultingSource(pair.en),
      arSource: pair.ar ? toConsultingSource(pair.ar) : null,
    });

    console.log(
      `✔ Consulting created: ${titleForLog(entities.en, titleForLog(pair.en))}`,
    );
    if (entities.ar) {
      console.log(`✔ Consulting localized (ar): ${titleForLog(entities.ar)}`);
    }
  }

  console.log("\nSeeding completed.");
  console.log(`- Consulting: ${limited.consultingPairs.length}`);
  console.log(`- Legal categories: ${limited.categoryPairs.length}`);
  console.log(`- Legal services: ${limited.servicesPairs.length}`);
}

seed().catch((error) => {
  console.error("Seeding failed:");
  console.error(error.message);
  process.exitCode = 1;
});
