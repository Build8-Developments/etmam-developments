import { gql } from "@apollo/client";

export const CONTACT_SUBMISSION = gql`
  mutation Mutation($data: ContactSubmissionInput!) {
    createContactSubmission(data: $data) {
      companyName
      email
      fullName
      language
      note
      phoneNumber
      preferredContactTime
      service
    }
  }
`;
