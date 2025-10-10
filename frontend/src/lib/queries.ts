import { gql } from '@apollo/client';

export const GET_HEADER_QUERY = gql`
  query GetHeader($locale: String!) {
    header(locale: $locale) {
      data {
        attributes {
          logo {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          navigationItems {
            label
            href
          }
          contactButton {
            label
            href
          }
        }
      }
    }
  }
`;

export const GET_HERO_QUERY = gql`
  query GetHero($locale: String!) {
    hero(locale: $locale) {
      data {
        attributes {
          title
          subtitle
          description
          primaryButton {
            label
            href
          }
          secondaryButton {
            label
            href
          }
          backgroundImage {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          personImage {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          smallImages {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;

