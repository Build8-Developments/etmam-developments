#!/usr/bin/env node

/**
 * Test GraphQL schema and mutations for consulting-service
 */

async function testGraphQLSchema(strapiUrl, apiToken) {
  const fetch = (await import("node-fetch")).default;

  console.log("\n🔍 Testing GraphQL Schema for consulting-service\n");
  console.log("=".repeat(60));

  // Test 1: Introspect available mutations
  console.log("\n1️⃣  Checking available mutations...\n");
  const mutationQuery = `
    query {
      __schema {
        mutationType {
          fields {
            name
            description
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(`${strapiUrl}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
      body: JSON.stringify({ query: mutationQuery }),
    });

    const result = await response.json();

    if (result.errors) {
      console.log("❌ Error:", result.errors);
      return;
    }

    const mutations = result.data.__schema.mutationType.fields;
    const consultingMutations = mutations.filter((m) =>
      m.name.toLowerCase().includes("consulting")
    );

    console.log("Available consulting-service mutations:");
    consultingMutations.forEach((m) => {
      console.log(`  - ${m.name}`);
    });

    if (consultingMutations.length === 0) {
      console.log("\n❌ No consulting-service mutations found!");
      console.log("💡 This means Shadow CRUD is not working properly.");
    }
  } catch (error) {
    console.log("❌ Failed:", error.message);
    return;
  }

  // Test 2: Check available queries
  console.log("\n2️⃣  Checking available queries...\n");
  const queryQuery = `
    query {
      __schema {
        queryType {
          fields {
            name
            type {
              name
              kind
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(`${strapiUrl}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
      body: JSON.stringify({ query: queryQuery }),
    });

    const result = await response.json();
    const queries = result.data.__schema.queryType.fields;
    const consultingQueries = queries.filter((q) =>
      q.name.toLowerCase().includes("consulting")
    );

    console.log("Available consulting-service queries:");
    consultingQueries.forEach((q) => {
      console.log(`  - ${q.name} (returns ${q.type.name || q.type.kind})`);
    });
  } catch (error) {
    console.log("❌ Failed:", error.message);
  }

  // Test 3: Test actual query structure
  console.log("\n3️⃣  Testing query structure...\n");
  const testQuery = `
    query {
      consultingServices(pagination: { limit: 1 }) {
        meta {
          pagination {
            total
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(`${strapiUrl}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
      body: JSON.stringify({ query: testQuery }),
    });

    const result = await response.json();

    if (result.errors) {
      console.log("Query errors:", result.errors[0].message);
    } else {
      console.log("✅ Query structure is correct");
      console.log(
        "Total services:",
        result.data?.consultingServices?.meta?.pagination?.total || 0
      );
    }
  } catch (error) {
    console.log("❌ Failed:", error.message);
  }

  // Test 4: Check ConsultingServiceInput type
  console.log("\n4️⃣  Checking ConsultingServiceInput type...\n");
  const inputTypeQuery = `
    query {
      __type(name: "ConsultingServiceInput") {
        name
        inputFields {
          name
          type {
            name
            kind
            ofType {
              name
              kind
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(`${strapiUrl}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
      body: JSON.stringify({ query: inputTypeQuery }),
    });

    const result = await response.json();

    if (result.data?.__type) {
      console.log("✅ ConsultingServiceInput exists");
      console.log("\nAvailable input fields:");
      result.data.__type.inputFields.slice(0, 10).forEach((field) => {
        const typeName =
          field.type.name || field.type.ofType?.name || field.type.kind;
        console.log(`  - ${field.name}: ${typeName}`);
      });

      if (result.data.__type.inputFields.length > 10) {
        console.log(
          `  ... and ${result.data.__type.inputFields.length - 10} more fields`
        );
      }
    } else {
      console.log("❌ ConsultingServiceInput type not found");
      console.log("💡 Schema might not be properly generated");
    }
  } catch (error) {
    console.log("❌ Failed:", error.message);
  }

  console.log("\n" + "=".repeat(60));
}

// CLI execution
const args = process.argv.slice(2);

if (args.length < 2) {
  console.error("Usage: node test-graphql.js <strapi-url> <api-token>");
  console.error(
    "Example: node test-graphql.js http://localhost:1337 your-token"
  );
  process.exit(1);
}

const strapiUrl = args[0];
const apiToken = args[1];

testGraphQLSchema(strapiUrl, apiToken)
  .then(() => {
    console.log("\n✅ Schema test completed\n");
  })
  .catch((error) => {
    console.error("\n❌ Test failed:", error.message);
    process.exit(1);
  });
