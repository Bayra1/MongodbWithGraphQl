import { gql } from "apollo-server-express";
const typeOfUser = gql`
  type User {
    id: ID!
    name: String
    email: String
    password: String
    age: Int
  }

  type Query {
    BeginningToNail: String
    getUserByName(name: String!): User
    fetchAllUsers: [User]!
  }

  type Mutation {
    addUser(name: String, email: String, password: String, age: Int): User
    deleteUserById(userId: ID!): Boolean
    updateUser(input: UpdateUserInput!): User
  }

  input UpdateUserInput {
    id: ID!
    name: String
    email: String
    password: String
    age: Int
  }
`;

export default typeOfUser;
