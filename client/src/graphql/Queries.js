import { gql } from "@apollo/client";

export const LOAD_JOBS = gql`
  query Jobs {
    jobs {
      id
      title
      type
      created_at
      description
      location
      url
      company {
        name
        logo_url
      }
    }
  }
`;

export const LOAD_JOB = gql`
  query Job($id: ID!) {
    job(id: $id) {
      id
      title
      type
      created_at
      description
      location
      url
      how_to_apply
      company {
        name
        logo_url
        url
      }
    }
  }
`;
