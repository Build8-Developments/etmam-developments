export default ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: env.bool('GRAPHQL_PLAYGROUND', true),
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
      locales: ['en', 'ar'],
      defaultLocale: 'ar',
    },
  },
});
