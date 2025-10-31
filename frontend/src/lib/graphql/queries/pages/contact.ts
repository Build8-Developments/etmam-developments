import { gql } from "@apollo/client";

export const GET_CONTACT_PAGE = gql`
  query Query($locale: I18NLocaleCode) {
    contact(locale: $locale) {
      location_link
      Hero {
        primaryButton {
          id
          label
          href
          variant
          icon {
            name
            url
          }
          openInNewTab
        }
        title
        subtitle
        backgroundImage {
          url
          name
        }
        stats {
          id
          value
          label
        }
        secondaryButton {
          id
          label
          href
          variant
          icon {
            name
            url
          }
          openInNewTab
        }
      }
      Contact_Info_Cards {
        id
        label
        icon {
          name
          url
        }
        data
      }
      Faq {
        id
        string
        faqs {
          id
          question
          answer
          order
        }
      }
    }
  }
`;
