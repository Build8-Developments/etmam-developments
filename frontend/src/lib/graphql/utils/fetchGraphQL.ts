import { DocumentNode } from "@apollo/client";
import { createEnhancedApolloClient } from "@/lib/apollo-client-enhanced";

/**
 * GraphQL fetch options
 */
interface FetchGraphQLOptions {
  /** GraphQL query or mutation */
  query: DocumentNode;
  /** Variables to pass to the query */
  variables?: Record<string, any>;
  /** Fetch policy (default: 'cache-first' for queries) */
  fetchPolicy?: "cache-first" | "network-only" | "cache-only" | "no-cache";
  /** Custom GraphQL endpoint (optional, uses env variable by default) */
  endpoint?: string;
  /** Authentication token (optional) */
  token?: string;
  /** Next.js revalidation time in seconds (for ISR) */
  revalidate?: number | false;
  /** Next.js tags for on-demand revalidation */
  tags?: string[];
}

/**
 * GraphQL response
 */
interface GraphQLResponse<T = any> {
  /** Response data */
  data: T | null;
  /** Error message if query failed */
  error: string | null;
  /** Whether the query was successful */
  success: boolean;
}

/**
 * Fetch data from GraphQL API (Server-Side)
 *
 * @example
 * ```typescript
 * // Simple usage
 * const result = await fetchGraphQL({
 *   query: GET_HOME_PAGE,
 *   variables: { locale: 'ar' }
 * });
 *
 * if (result.success) {
 *   const homeData = result.data.home;
 * }
 * ```
 *
 * @example
 * ```typescript
 * // With custom options
 * const result = await fetchGraphQL({
 *   query: GET_BLOG_POSTS,
 *   variables: { locale: 'en', page: 1 },
 *   fetchPolicy: 'network-only',
 * });
 * ```
 */
export async function fetchGraphQL<T = any>(
  options: FetchGraphQLOptions
): Promise<GraphQLResponse<T>> {
  const {
    query,
    variables = {},
    fetchPolicy = "cache-first",
    endpoint = process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL ||
      "http://localhost:1337/graphql",
    token = process.env.STRAPI_API_TOKEN,
    revalidate,
    tags,
  } = options;

  try {
    // For Next.js Data Cache integration, we need to use fetch() with ISR options
    // But since we're using Apollo Client, we'll configure it at the HTTP link level

    // Create Apollo Client with Next.js cache integration
    const client = createEnhancedApolloClient(endpoint, token);

    // Execute query
    const response = await client.query({
      query,
      variables,
      fetchPolicy,
      context: {
        fetchOptions: {
          next: {
            revalidate,
            tags,
          },
        },
      },
    });

    return {
      data: response.data as T,
      error: null,
      success: true,
    };
  } catch (err: any) {
    // Only log errors in development or when explicitly needed
    // Suppress connection refused errors when Strapi is not running (using mock data fallback)
    if (process.env.NODE_ENV === 'development' && !err.message?.includes('ECONNREFUSED')) {
      console.warn("GraphQL Error:", err.message || "An unknown error occurred");
    }

    return {
      data: null,
      error: err.message || "An unknown error occurred",
      success: false,
    };
  }
}

/**
 * Fetch data with automatic locale handling
 *
 * @example
 * ```typescript
 * const result = await fetchWithLocale({
 *   query: GET_HOME_PAGE,
 *   locale: 'ar'
 * });
 * ```
 */
export async function fetchWithLocale<T = any>(options: {
  query: DocumentNode;
  locale: string;
  variables?: Record<string, any>;
  fetchPolicy?: "cache-first" | "network-only" | "cache-only" | "no-cache";
  revalidate?: number | false;
  tags?: string[];
}): Promise<GraphQLResponse<T>> {
  const {
    query,
    locale,
    variables = {},
    fetchPolicy,
    revalidate,
    tags,
  } = options;

  const fetchOptions: FetchGraphQLOptions = {
    query,
    variables: { ...variables, locale },
  };

  if (fetchPolicy) {
    fetchOptions.fetchPolicy = fetchPolicy;
  }

  if (revalidate !== undefined) {
    fetchOptions.revalidate = revalidate;
  }

  if (tags) {
    fetchOptions.tags = tags;
  }

  return fetchGraphQL<T>(fetchOptions);
}

/**
 * Fetch multiple queries in parallel
 *
 * @example
 * ```typescript
 * const results = await fetchMultiple([
 *   { query: GET_HEADER, variables: { locale: 'ar' } },
 *   { query: GET_FOOTER, variables: { locale: 'ar' } },
 *   { query: GET_HOME_PAGE, variables: { locale: 'ar' } },
 * ]);
 * ```
 */
export async function fetchMultiple(
  queries: FetchGraphQLOptions[]
): Promise<GraphQLResponse[]> {
  return Promise.all(queries.map((query) => fetchGraphQL(query)));
}

/**
 * Fetch data with error boundary
 * Throws error if query fails (useful with error boundaries)
 *
 * @example
 * ```typescript
 * const data = await fetchOrThrow({
 *   query: GET_HOME_PAGE,
 *   variables: { locale: 'ar' }
 * });
 * // No need to check for errors, will throw if failed
 * const homeData = data.home;
 * ```
 */
export async function fetchOrThrow<T = any>(
  options: FetchGraphQLOptions
): Promise<T> {
  const result = await fetchGraphQL<T>(options);

  if (!result.success || !result.data) {
    throw new Error(result.error || "Failed to fetch data");
  }

  return result.data;
}
