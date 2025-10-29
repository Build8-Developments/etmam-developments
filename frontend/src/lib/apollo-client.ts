import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { showToast } from '@/utils/toast';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL || 'http://localhost:1337/graphql',
});

// Auth Link to add API token to requests
const authLink = setContext((_, { headers }) => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || process.env.STRAPI_API_TOKEN;
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError, operation }: any) => {
  // Only show toast for mutations, not queries (to avoid spam)
  const isMutation = operation?.operationName?.toLowerCase().includes('mutation') || 
                     operation?.query?.definitions?.some((def: any) => def.operation === 'mutation');

  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }: any) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
      
      // Show toast for mutations only
      if (isMutation) {
        if (message.includes('FORBIDDEN') || message.includes('Forbidden')) {
          showToast(
            'ليس لديك صلاحية لإجراء هذه العملية. يرجى التأكد من بياناتك والمحاولة مرة أخرى.',
            'error',
            6000
          );
        } else if (message.includes('UNAUTHENTICATED')) {
          showToast(
            'يجب تسجيل الدخول أولاً.',
            'warning',
            5000
          );
        } else {
          showToast(
            `حدث خطأ: ${message}`,
            'error',
            6000
          );
        }
      }
    });
  }
  
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    // Only show toast for mutations
    if (isMutation) {
      if (networkError.message?.includes('Failed to fetch') || networkError.message?.includes('ECONNREFUSED')) {
        showToast(
          'لا يمكن الاتصال بالخادم. يرجى التحقق من الاتصال والمحاولة مرة أخرى.',
          'error',
          6000
        );
      } else {
        showToast(
          'حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.',
          'error',
          6000
        );
      }
    }
  }
});

const createApolloClient = () => {
  return new ApolloClient({
    link: from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all',
      },
      query: {
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
      },
    },
  });
};

export default createApolloClient;

