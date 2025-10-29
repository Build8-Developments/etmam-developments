/**
 * contact-submission controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::contact-submission.contact-submission",
  ({ strapi }) => ({
    async create(ctx) {
      const { data } = ctx.request.body;
      const ipAddress = ctx.request.ip;
      const userAgent = ctx.request.header["user-agent"];

      // Rate limiting: Check submissions from same IP in last hour
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
      const recentSubmissions = await strapi.db
        .query("api::contact-submission.contact-submission")
        .findMany({
          where: {
            ipAddress: ipAddress,
            createdAt: {
              $gte: oneHourAgo,
            },
          },
        });

      // Limit: 3 submissions per hour per IP
      if (recentSubmissions.length >= 3) {
        return ctx.badRequest(
          "Too many contact submissions. Please try again later."
        );
      }

      // Check for duplicate submissions (same email in last 10 minutes)
      const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
      const duplicateSubmission = await strapi.db
        .query("api::contact-submission.contact-submission")
        .findOne({
          where: {
            email: data.email,
            createdAt: {
              $gte: tenMinutesAgo,
            },
          },
        });

      if (duplicateSubmission) {
        return ctx.badRequest(
          "You have already submitted a contact form recently. Please wait before submitting again."
        );
      }

      // Basic validation
      if (!data.fullName || !data.email || !data.phoneNumber) {
        return ctx.badRequest("Required fields are missing.");
      }

      // Add metadata to the submission
      ctx.request.body.data = {
        ...data,
        ipAddress,
        userAgent,
        status: "new",
      };

      // Create the submission
      const response = await super.create(ctx);

      // TODO: Send email notification to admin
      // You can implement this with Strapi email plugin later

      return response;
    },

    async find(ctx) {
      // Prevent public from listing all submissions
      if (!ctx.state.user) {
        return ctx.forbidden("You cannot access this resource.");
      }
      return super.find(ctx);
    },

    async findOne(ctx) {
      // Prevent public from viewing individual submissions
      if (!ctx.state.user) {
        return ctx.forbidden("You cannot access this resource.");
      }
      return super.findOne(ctx);
    },
  })
);
