import { gql } from "@apollo/client";

export const GET_TODOS = gql`
query GetTodos {
  todos {
    id
    title
    isCompleted
  }
}`

export const CREATE_TODO = gql`
mutation CreateTodo($title: String!, $description: String) {
  createTodo(title: $title, description: $description) {
    id
    description
    isCompleted
    title
  }
}
`;
