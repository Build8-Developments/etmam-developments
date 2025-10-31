import { gql } from "@apollo/client";

export const GET_FOOTER = gql`
  query GetFooter($locale: I18NLocaleCode) {
    footer(locale: $locale) {
      logo {
        url
        name
      }
      slogan
      companyName
      companyTagline
      consultingServices {
        label
        href
      }
      legalServices {
        label
        href
      }
      quickLinks {
        label
        href
      }
      copyright
    }
  }
`;

