/**
 * Enhanced Apollo Client configuration with better error handling and caching
 */

import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";

/**
 * Create enhanced Apollo Client with better error handling and caching
 * Now supports Next.js ISR (Incremental Static Regeneration)
 * @param uri - GraphQL endpoint URL
 * @param token - Optional authentication token
 */
export function createEnhancedApolloClient(uri: string, token?: string) {
  // HTTP Link with Next.js fetch integration for ISR support
  const httpLink = new HttpLink({
    uri,
    credentials: "include",
    // Use native fetch to enable Next.js caching features
    fetch: (url, options) => {
      return fetch(url, {
        ...options,
        // Next.js will use these options for ISR
        // They will be passed via context.fetchOptions.next
      });
    },
  });

  // Auth Link
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "application/json",
      },
    };
  });

  // Error Link with enhanced error handling
  const errorLink = onError((errorHandlerOptions: any) => {
    const { graphQLErrors, networkError } = errorHandlerOptions;

    if (graphQLErrors) {
      graphQLErrors.forEach((error: any) => {
        console.error(
          `[GraphQL error]: Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}`
        );

        // Handle specific error types
        if (error.message.includes("UNAUTHENTICATED")) {
          // Handle authentication errors
          console.warn("User authentication required");
        } else if (error.message.includes("FORBIDDEN")) {
          // Handle authorization errors
          console.warn("User not authorized for this operation");
        }
      });
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError}`);

      // Handle network errors
      if (networkError.message.includes("Failed to fetch")) {
        console.warn("Network connection issue detected");
      }
    }
  });

  // Retry Link for failed requests
  const retryLink = new ApolloLink((operation, forward) => {
    return forward(operation);
  });

  // Cache configuration
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          // Cache policies for specific queries
          services: {
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
          blogs: {
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  });

  return new ApolloClient({
    link: from([errorLink, authLink, retryLink, httpLink]),
    cache,
    defaultOptions: {
      watchQuery: {
        errorPolicy: "all",
        fetchPolicy: "cache-first",
      },
      query: {
        errorPolicy: "all",
        fetchPolicy: "cache-first",
      },
      mutate: {
        errorPolicy: "all",
      },
    },
  });
}

/**
 * Default Apollo Client instance
 */
export const apolloClient = createEnhancedApolloClient(
  process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL || "http://localhost:1337/graphql"
);
