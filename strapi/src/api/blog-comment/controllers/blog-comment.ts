/**
 * blog-comment controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::blog-comment.blog-comment",
  ({ strapi }) => ({
    async create(ctx) {
      const { data } = ctx.request.body;
      const ipAddress = ctx.request.ip;
      const userAgent = ctx.request.header["user-agent"];

      // Rate limiting: Check comments from same IP in last hour
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
      const recentComments = await strapi.db
        .query("api::blog-comment.blog-comment")
        .findMany({
          where: {
            ipAddress: ipAddress,
            createdAt: {
              $gte: oneHourAgo,
            },
          },
        });

      // Limit: 3 comments per hour per IP
      if (recentComments.length >= 3) {
        return ctx.badRequest("Rate limit exceeded. Please try again later.");
      }

      // Check for duplicate comments (same email + comment text in last 5 minutes)
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      const duplicateComment = await strapi.db
        .query("api::blog-comment.blog-comment")
        .findOne({
          where: {
            email: data.email,
            comment: data.comment,
            createdAt: {
              $gte: fiveMinutesAgo,
            },
          },
        });

      if (duplicateComment) {
        return ctx.badRequest(
          "Duplicate comment detected. Please wait before posting again."
        );
      }

      // Basic spam detection
      const isSpam = detectSpam(data.comment, data.name);

      // Add metadata to the comment
      ctx.request.body.data = {
        ...data,
        ipAddress,
        userAgent,
        isSpam,
        approved: isSpam ? false : data.approved || false, // Auto-reject if spam
      };

      // Create the comment
      const response = await super.create(ctx);
      return response;
    },

    async find(ctx) {
      // Only return approved, non-spam comments to public
      if (!ctx.state.user) {
        ctx.query.filters = {
          ...(typeof ctx.query.filters === "object" ? ctx.query.filters : {}),
          approved: true,
          isSpam: false,
        };
      }
      return super.find(ctx);
    },
  })
);

// Simple spam detection helper
function detectSpam(comment: string, name: string): boolean {
  const spamKeywords = [
    "viagra",
    "casino",
    "lottery",
    "click here",
    "buy now",
    "limited time",
    "act now",
    "discount",
    "free money",
  ];

  const lowerComment = comment.toLowerCase();
  const lowerName = name.toLowerCase();

  // Check for spam keywords
  const hasSpamKeyword = spamKeywords.some(
    (keyword) => lowerComment.includes(keyword) || lowerName.includes(keyword)
  );

  // Check for excessive links
  const linkCount = (comment.match(/https?:\/\//g) || []).length;
  const hasExcessiveLinks = linkCount > 2;

  // Check for excessive caps
  const capsCount = (comment.match(/[A-Z]/g) || []).length;
  const capsPercentage = capsCount / comment.length;
  const hasExcessiveCaps = capsPercentage > 0.5 && comment.length > 10;

  return hasSpamKeyword || hasExcessiveLinks || hasExcessiveCaps;
}
