import { gql } from "@apollo/client";

export const GET_CONTACTS_INFO = gql`
  query Query {
    contactInfos {
      email
      phone_number
      whatsapp_number
      location_link
      facebook_link
      instagram_link
      twitter_link
    }
  }
`;
