const fetch = require("node-fetch");

/**
 * Check what data exists in the database
 */

async function check() {
  const STRAPI_URL = "http://localhost:1337";
  const API_TOKEN = process.argv[2];

  if (!API_TOKEN) {
    console.error("❌ Error: API token required");
    process.exit(1);
  }

  // Query without locale filter
  const query = `
    query CheckData {
      legalServiceCategories(pagination: { limit: 5 }) {
        documentId
        name
        slug
        order
        locale
        publishedAt
      }
      legalSubServices(pagination: { limit: 5 }) {
        documentId
        name
        slug
        order
        locale
        publishedAt
      }
    }
  `;

  const response = await fetch(`${STRAPI_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();

  if (result.errors) {
    console.error("GraphQL Errors:", JSON.stringify(result.errors, null, 2));
  } else {
    console.log(
      "Categories:",
      JSON.stringify(result.data.legalServiceCategories, null, 2)
    );
    console.log(
      "\nServices:",
      JSON.stringify(result.data.legalSubServices, null, 2)
    );
  }
}

check();
