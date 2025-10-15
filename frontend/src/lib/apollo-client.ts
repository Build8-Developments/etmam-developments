import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
  uri:
    process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL ||
    "http://localhost:1337/graphql",
});

const errorLink = onError((errorResponse) => {
  // Type assertion to work around Apollo Client v4 type issues
  const response = errorResponse as any;

  if (response.graphQLErrors) {
    response.graphQLErrors.forEach((error: any) => {
      console.log(
        `[GraphQL error]: Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}`
      );
    });
  }

  if (response.networkError) {
    console.log(`[Network error]: ${response.networkError}`);
  }
});

const createApolloClient = () => {
  return new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: "all",
      },
      query: {
        errorPolicy: "all",
      },
    },
  });
};

export default createApolloClient;
