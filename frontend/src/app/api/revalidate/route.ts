import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

/**
 * On-Demand Revalidation API
 *
 * Allows you to manually revalidate specific paths or tags
 * Useful for Strapi webhooks to instantly update cache when content changes
 *
 * Usage:
 * POST /api/revalidate?secret=YOUR_SECRET&path=/
 * POST /api/revalidate?secret=YOUR_SECRET&tag=home-page
 *
 * Set REVALIDATION_SECRET in .env.local
 */
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const path = request.nextUrl.searchParams.get("path");
  const tag = request.nextUrl.searchParams.get("tag");

  // Verify secret to prevent unauthorized revalidation
  if (secret !== process.env.REVALIDATION_SECRET) {
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
 * GET endpoint for testing (should be disabled in production)
 */
export async function GET() {
  // Only allow in development
  if (process.env.NODE_ENV === "production") {
    return Response.json(
      { message: "GET method not allowed in production" },
      { status: 405 }
    );
  }

  return Response.json({
    message: "Revalidation API",
    usage: {
      path: "/api/revalidate?secret=YOUR_SECRET&path=/page-path",
      tag: "/api/revalidate?secret=YOUR_SECRET&tag=tag-name",
    },
    note: "Use POST method for revalidation",
  });
}
