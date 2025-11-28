#!/usr/bin/env node

/**
 * Diagnostic script to check Strapi connection and permissions
 */

const readline = require("readline");

async function checkStrapiConnection(strapiUrl, apiToken) {
  console.log("\n🔍 Running Diagnostics...\n");
  console.log("=".repeat(60));

  const fetch = (await import("node-fetch")).default;

  // Test 1: Check if Strapi is running
  console.log("\n1️⃣  Testing Strapi connection...");
  try {
    const response = await fetch(strapiUrl);
    if (response.ok) {
      console.log("   ✅ Strapi server is running");
    } else {
      console.log(`   ⚠️  Server responded with status: ${response.status}`);
    }
  } catch (error) {
    console.log("   ❌ Cannot connect to Strapi server");
    console.log(`   Error: ${error.message}`);
    console.log("\n💡 Make sure Strapi is running:");
    console.log("   cd strapi && npm run develop");
    return false;
  }

  // Test 2: Check GraphQL endpoint
  console.log("\n2️⃣  Testing GraphQL endpoint...");
  try {
    const query = `query { __schema { queryType { name } } }`;
    const response = await fetch(`${strapiUrl}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();

    if (response.status === 401) {
      console.log("   ❌ Authentication failed (401 Unauthorized)");
      console.log("   💡 Your API token is invalid or missing permissions");
      return false;
    }

    if (result.data) {
      console.log("   ✅ GraphQL endpoint is accessible");
    } else if (result.errors) {
      console.log("   ⚠️  GraphQL returned errors:");
      console.log("   ", JSON.stringify(result.errors, null, 2));
    }
  } catch (error) {
    console.log("   ❌ GraphQL endpoint test failed");
    console.log(`   Error: ${error.message}`);
    return false;
  }

  // Test 3: Check consulting-service query
  console.log("\n3️⃣  Testing consulting-service query...");
  try {
    const query = `
      query {
        consultingServices(pagination: { limit: 1 }) {
          documentId
          name
          slug
        }
      }
    `;

    const response = await fetch(`${strapiUrl}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();

    if (result.errors) {
      console.log("   ⚠️  Query failed with errors:");
      result.errors.forEach((err) => {
        console.log(`   - ${err.message}`);
      });

      if (result.errors.some((e) => e.message.includes("Cannot query field"))) {
        console.log("\n   💡 Schema might not be updated. Try:");
        console.log("      1. Restart Strapi");
        console.log(
          "      2. Check Content-Type Builder for consulting-service"
        );
      }
    } else if (result.data) {
      console.log("   ✅ consulting-service collection is accessible");
      const services = result.data.consultingServices || [];
      console.log(
        `   Found ${Array.isArray(services) ? services.length : 0} services`
      );
    }
  } catch (error) {
    console.log("   ❌ Query test failed");
    console.log(`   Error: ${error.message}`);
  }

  // Test 4: Check upload endpoint
  console.log("\n4️⃣  Testing upload endpoint...");
  try {
    const response = await fetch(`${strapiUrl}/api/upload`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });

    if (response.status === 401) {
      console.log("   ❌ Upload endpoint: Authentication failed");
      console.log("   💡 API token lacks upload permissions");
    } else if (response.status === 403) {
      console.log("   ❌ Upload endpoint: Forbidden");
      console.log("   💡 API token lacks upload permissions");
    } else {
      console.log("   ✅ Upload endpoint is accessible");
    }
  } catch (error) {
    console.log("   ⚠️  Upload endpoint test failed");
    console.log(`   Error: ${error.message}`);
  }

  // Test 5: Test create mutation
  console.log("\n5️⃣  Testing create mutation (dry run)...");
  try {
    const mutation = `
      query {
        __type(name: "ConsultingServiceInput") {
          name
          inputFields {
            name
            type {
              name
              kind
            }
          }
        }
      }
    `;

    const response = await fetch(`${strapiUrl}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
      body: JSON.stringify({ query: mutation }),
    });

    const result = await response.json();

    if (result.errors) {
      console.log("   ⚠️  Could not verify mutation schema");
      console.log(`   Error: ${result.errors[0].message}`);
    } else if (result.data?.__type) {
      console.log("   ✅ Create mutation schema is available");
      console.log(
        `   Available fields: ${result.data.__type.inputFields.length}`
      );

      // Check for key fields
      const fieldNames = result.data.__type.inputFields.map((f) => f.name);
      const hasRequiredFields = ["name", "slug"].every((f) =>
        fieldNames.includes(f)
      );

      if (hasRequiredFields) {
        console.log("   ✅ Required fields (name, slug) are present");
      }
    } else {
      console.log("   ⚠️  Could not verify mutation schema");
      console.log("   Response:", JSON.stringify(result, null, 2));
    }
  } catch (error) {
    console.log("   ⚠️  Mutation test failed");
    console.log(`   Error: ${error.message}`);
  }

  console.log("\n" + "=".repeat(60));
  console.log("\n📋 Summary & Recommendations:\n");

  return true;
}

async function askInput(question, defaultValue = "") {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    const prompt = defaultValue
      ? `${question} (default: ${defaultValue}): `
      : `${question}: `;

    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer.trim() || defaultValue);
    });
  });
}

async function main() {
  console.log("\n🔧 Strapi Migration Diagnostics Tool");
  console.log("=".repeat(60));

  const strapiUrl = await askInput("\nStrapi URL", "http://localhost:1337");
  const apiToken = await askInput("API Token");

  if (!apiToken) {
    console.log("\n❌ API token is required");
    console.log("\n💡 How to create an API token:");
    console.log("   1. Open Strapi admin: http://localhost:1337/admin");
    console.log("   2. Go to Settings → API Tokens → Create new API Token");
    console.log('   3. Set Token name: "Migration Token"');
    console.log("   4. Set Token duration: Unlimited");
    console.log(
      "   5. Set Token type: Full Access (or custom with these permissions):"
    );
    console.log("      - consulting-service: create, update, find");
    console.log("      - upload: upload");
    console.log("   6. Save and copy the token\n");
    process.exit(1);
  }

  await checkStrapiConnection(strapiUrl, apiToken);

  console.log("\n✅ Next steps:");
  console.log("   1. Fix any issues found above");
  console.log("   2. If API token is invalid, create a new one");
  console.log(
    "   3. If Strapi is not running, start it: cd strapi && npm run develop"
  );
  console.log("   4. Re-run the migration with: node migrate.js\n");
}

if (require.main === module) {
  main().catch((error) => {
    console.error("\n❌ Diagnostic failed:", error.message);
    process.exit(1);
  });
}

module.exports = { checkStrapiConnection };
