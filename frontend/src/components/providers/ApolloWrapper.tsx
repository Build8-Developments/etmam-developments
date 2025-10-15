'use client';

import { ApolloProvider } from '@apollo/client/react';
import createApolloClient from '@/lib/apollo-client';

interface ApolloWrapperProps {
  children: React.ReactNode;
}

export default function ApolloWrapper({ children }: ApolloWrapperProps) {
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}
