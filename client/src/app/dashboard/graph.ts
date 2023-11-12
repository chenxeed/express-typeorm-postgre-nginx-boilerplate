import { gql } from "@apollo/client";

export const GET_USERS = gql`
query Query {
  users {
    firstName
    id
  }
}
`

export const CREATE_USER = gql`
mutation Mutation($firstName: String!, $lastName: String!) {
  createUser(firstName: $firstName, lastName: $lastName) {
    firstName
    id
    lastName
    address
  }
}
`;
