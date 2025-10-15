import { gql } from '@apollo/client';

// Layout Queries
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

export const GET_FOOTER_QUERY = gql`
  query GetFooter($locale: String!) {
    footer(locale: $locale) {
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
          description
          quickLinks {
            label
            href
          }
          services {
            label
            href
          }
          contactInfo {
            address
            phone
            email
          }
          socialLinks {
            platform
            url
            icon
          }
          copyright
        }
      }
    }
  }
`;

// Home Page Queries
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

export const GET_HOME_ABOUT_QUERY = gql`
  query GetHomeAbout($locale: String!) {
    homeAbout(locale: $locale) {
      data {
        attributes {
          title
          subtitle
          description
          features {
            id
            title
            description
            icon
          }
          image {
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

export const GET_STATISTICS_QUERY = gql`
  query GetStatistics($locale: String!) {
    statistics(locale: $locale) {
      data {
        attributes {
          statistics {
            id
            value
            label
            icon {
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
  }
`;

export const GET_PARTNERS_QUERY = gql`
  query GetPartners($locale: String!) {
    partners(locale: $locale) {
      data {
        attributes {
          partners {
            id
            name
            logo {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            href
          }
        }
      }
    }
  }
`;

export const GET_CTA_QUERY = gql`
  query GetCTA($locale: String!) {
    cta(locale: $locale) {
      data {
        attributes {
          title
          buttonText
          backgroundImage {
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

// Services Queries
export const GET_SERVICES_QUERY = gql`
  query GetServices($locale: String!) {
    services(locale: $locale) {
      data {
        attributes {
          services {
            id
            title
            description
            icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            href
          }
        }
      }
    }
  }
`;

export const GET_SERVICE_DETAIL_QUERY = gql`
  query GetServiceDetail($id: ID!, $locale: String!) {
    service(id: $id, locale: $locale) {
      data {
        attributes {
          title
          description
          longDescription
          features
          benefits
          process {
            title
            steps
          }
          pricing {
            title
            packages {
              name
              price
              features
              isPopular
            }
          }
          faq {
            question
            answer
          }
          image {
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

export const GET_HOW_IT_WORKS_QUERY = gql`
  query GetHowItWorks($locale: String!) {
    howItWorks(locale: $locale) {
      data {
        attributes {
          steps {
            id
            title
            description
            icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            order
          }
        }
      }
    }
  }
`;

// About Page Queries
export const GET_ABOUT_QUERY = gql`
  query GetAbout($locale: String!) {
    about(locale: $locale) {
      data {
        attributes {
          title
          subtitle
          description
          features {
            id
            title
            description
            icon
          }
          image {
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

export const GET_LEADERSHIP_QUERY = gql`
  query GetLeadership($locale: String!) {
    leadership(locale: $locale) {
      data {
        attributes {
          members {
            id
            name
            position
            bio
            image {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            socialLinks {
              linkedin
              twitter
              email
            }
          }
        }
      }
    }
  }
`;

export const GET_SUCCESS_FOUNDATION_QUERY = gql`
  query GetSuccessFoundation($locale: String!) {
    successFoundation(locale: $locale) {
      data {
        attributes {
          stories {
            id
            title
            description
            metrics {
              label
              value
            }
            image {
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
  }
`;

export const GET_WHY_CHOOSE_QUERY = gql`
  query GetWhyChoose($locale: String!) {
    whyChoose(locale: $locale) {
      data {
        attributes {
          items {
            id
            title
            description
            icon
          }
        }
      }
    }
  }
`;

// Blog Queries
export const GET_BLOG_POSTS_QUERY = gql`
  query GetBlogPosts($locale: String!, $limit: Int, $start: Int) {
    blogPosts(locale: $locale, pagination: { limit: $limit, start: $start }, sort: "publishedAt:desc") {
      data {
        id
        attributes {
          title
          excerpt
          publishedAt
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          slug
        }
      }
      meta {
        pagination {
          total
          pageCount
          pageSize
          page
        }
      }
    }
  }
`;

export const GET_BLOG_POST_QUERY = gql`
  query GetBlogPost($slug: String!, $locale: String!) {
    blogPosts(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        id
        attributes {
          title
          content
          excerpt
          publishedAt
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          author {
            data {
              attributes {
                name
                bio
                avatar {
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
          tags {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

// Contact Queries
export const GET_CONTACT_INFO_QUERY = gql`
  query GetContactInfo($locale: String!) {
    contactInfo(locale: $locale) {
      data {
        attributes {
          title
          description
          contactMethods {
            type
            label
            value
            icon
          }
          officeHours {
            days
            hours
          }
          mapLocation {
            lat
            lng
            address
          }
        }
      }
    }
  }
`;

// FAQ Queries
export const GET_FAQ_QUERY = gql`
  query GetFAQ($locale: String!) {
    faqs(locale: $locale) {
      data {
        id
        attributes {
          question
          answer
          category
        }
      }
    }
  }
`;

// Consultation Queries
export const GET_CONSULTATION_QUERY = gql`
  query GetConsultation($locale: String!) {
    consultation(locale: $locale) {
      data {
        attributes {
          title
          description
          formFields {
            type
            label
            placeholder
            required
            options {
              value
              label
            }
          }
          submitButton {
            label
          }
          successMessage
        }
      }
    }
  }
`;

// Common Queries
export const GET_SEO_QUERY = gql`
  query GetSEO($locale: String!, $page: String!) {
    seo(locale: $locale, filters: { page: { eq: $page } }) {
      data {
        attributes {
          title
          description
          keywords
          ogImage {
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

