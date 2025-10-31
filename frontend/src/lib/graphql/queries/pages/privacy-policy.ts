import { gql } from "@apollo/client";

export const GET_PRIVACY_POLICY = gql`
  query PrivacyPolicyPage($locale: I18NLocaleCode) {
    privacyPolicyPage(locale: $locale) {
      Hero {
        title
        subtitle
        primaryButton {
          label
          href
          variant
          icon {
            url
            name
          }
          openInNewTab
        }
        secondaryButton {
          id
          label
          href
          variant
          icon {
            url
            name
          }
          openInNewTab
        }
        backgroundImage {
          url
          name
        }
        stats {
          id
          value
          label
        }
      }
      locale
      privacy_policy {
        content {
          title
          order
          contents
        }
        icon {
          url
          name
        }
        subtitle
        title
      }
    }
  }
`;
