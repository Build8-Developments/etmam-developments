import crypto from "crypto";

export default ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: env.bool("GRAPHQL_PLAYGROUND", true),
      depthLimit: 10,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  "users-permissions": {
    config: {
      jwt: {
        jwtSecret:
          env("JWT_SECRET") || crypto.randomBytes(16).toString("base64"),
      },
    },
  },
  i18n: {
    enabled: true,
    config: {
      locales: ["en", "ar"],
      defaultLocale: "ar",
    },
  },
});
