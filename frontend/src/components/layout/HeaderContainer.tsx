'use client';

import { useHeader } from '@/hooks/graphql/useGraphQL';
import Header from './Header';

export default function HeaderContainer() {
  const { data } = useHeader();

  const logo = data?.logo?.data?.attributes
    ? {
        url: data.logo.data.attributes.url as string,
        alternativeText: (data.logo.data.attributes as any).alternativeText || 'Logo',
      }
    : undefined;

  const navigationItems = data?.navigationItems?.length ? data.navigationItems : undefined;
  const contactButton = data?.contactButton || undefined;

  return (
    <Header
      logo={logo as any}
      navigationItems={navigationItems as any}
      contactButton={contactButton as any}
    />
  );
}
