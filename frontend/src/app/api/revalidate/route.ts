import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

/**
 * On-Demand Revalidation API
 *
 * Allows you to manually revalidate specific paths or tags
 * Useful for Strapi webhooks to instantly update cache when content changes
 *
 * Usage:
 * GET/POST /api/revalidate?secret=YOUR_SECRET&path=/
 * GET/POST /api/revalidate?secret=YOUR_SECRET&tag=home-page
 *
 * Set REVALIDATION_SECRET in .env.local
 */

/**
 * Handle revalidation logic for both GET and POST requests
 */
async function handleRevalidation(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const path = request.nextUrl.searchParams.get("path");
  const tag = request.nextUrl.searchParams.get("tag");

  // Verify secret to prevent unauthorized revalidation
  if (!secret || secret !== process.env.REVALIDATION_SECRET) {
    return Response.json({ message: "Invalid secret token" }, { status: 401 });
  }

  try {
    // Revalidate by path
    if (path) {
      revalidatePath(path);
      console.log(`✅ Revalidated path: ${path}`);
      return Response.json({
        revalidated: true,
        type: "path",
        value: path,
        timestamp: new Date().toISOString(),
      });
    }

    // Revalidate by tag
    if (tag) {
      revalidateTag(tag);
      console.log(`✅ Revalidated tag: ${tag}`);
      return Response.json({
        revalidated: true,
        type: "tag",
        value: tag,
        timestamp: new Date().toISOString(),
      });
    }

    return Response.json(
      { message: "Missing path or tag parameter" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("❌ Revalidation error:", error);
    return Response.json(
      {
        message: "Error revalidating",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

/**
 * POST endpoint - primary method for webhooks
 */
export async function POST(request: NextRequest) {
  return handleRevalidation(request);
}

/**
 * GET endpoint - for webhooks that only support GET
 */
export async function GET(request: NextRequest) {
  return handleRevalidation(request);
}
