import { gql } from "@apollo/client";

export const GET_BLOG_POSTS = gql`
  query Blogs($locale: I18NLocaleCode) {
    blogs(locale: $locale) {
      banner {
        url
        name
      }
      content
      featured_post
      publishedAt
      slug
      summary
      title
      updatedAt
      blog_author {
        bio
        name
        profileImage {
          url
          name
        }
      }
      blog_category {
        colorCode
        name
      }
      blog_comments {
        approved
        comment
        createdAt
        publishedAt
        name
        email
      }
    }
  }
`;

export const GET_FEATURED_BLOG_POSTS = gql`
  query FeaturedBlogs($locale: I18NLocaleCode) {
    blogs(
      locale: $locale
      filters: { featured_post: { eq: true } }
      pagination: { limit: 3 }
      sort: "publishedAt:desc"
    ) {
      banner {
        url
        name
      }
      featured_post
      publishedAt
      slug
      summary
      title
      updatedAt
    }
  }
`;

export const GET_BLOG_POST_BY_SLUG = gql`
  query BlogPostBySlug($slug: String!, $locale: I18NLocaleCode) {
    blogs(
      locale: $locale
      filters: { slug: { eq: $slug } }
      pagination: { limit: 1 }
    ) {
      banner {
        url
        name
      }
      content
      featured_post
      publishedAt
      slug
      summary
      title
      updatedAt
      documentId
      blog_author {
        bio
        name
        profileImage {
          url
          name
        }
      }
      blog_category {
        colorCode
        name
      }
      blog_comments {
        approved
        comment
        createdAt
        publishedAt
        name
        email
      }
    }
  }
`;

export const GET_BLOG_POST_DEFAULT_LOCALE = gql`
  query BlogPostDefaultLocale($slug: String!) {
    blogsAr: blogs(
      locale: "ar"
      filters: { slug: { eq: $slug } }
      pagination: { limit: 1 }
    ) {
      documentId
      locale
    }
    blogsEn: blogs(
      locale: "en"
      filters: { slug: { eq: $slug } }
      pagination: { limit: 1 }
    ) {
      documentId
      locale
    }
  }
`;

export const GET_BLOG_POST_COMMENTS = gql`
  query BlogComments($blogPostId: ID!) {
    blogComments(
      filters: {
        blog_post: { documentId: { eq: $blogPostId } }
        approved: { eq: true }
        isSpam: { eq: false }
      }
      sort: "createdAt:desc"
    ) {
      documentId
      name
      email
      comment
      createdAt
    }
  }
`;

export const CREATE_BLOG_COMMENT = gql`
  mutation CreateBlogComment(
    $name: String!
    $email: String!
    $comment: String!
    $blogPostId: ID!
  ) {
    createBlogComment(
      data: {
        name: $name
        email: $email
        comment: $comment
        blog_post: $blogPostId
      }
    ) {
      documentId
      name
      email
      comment
      createdAt
      approved
    }
  }
`;
