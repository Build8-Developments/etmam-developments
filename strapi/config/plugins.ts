export default ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      landingPage: env("NODE_ENV") !== "production",
      depthLimit: 10,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
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
