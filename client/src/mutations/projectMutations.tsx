import { gql } from '@apollo/client';

export const ADD_PROJECT = gql`
  mutation addProject($name: String!, $description: String!, $status: String!, $clientId: ID!) {
    addProject(name: $name, description: $description, status: $status, clientId: $clientId) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject($id: ID!) {
      id
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject($id: ID!, $name: String!, $description: String!, $status: String!) {
    updateProject(id: $id, name: $name, description: $description, status: $status) {
      id
      name
      description,
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;