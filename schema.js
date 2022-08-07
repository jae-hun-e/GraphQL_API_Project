import {gql} from "apollo-server";

export const typeDefs = gql`
    
  type Query {
  allUsers: [User!]!
  allTweets: [Tweet]
  tweet(id: ID): Tweet
  ping : String
  }
  
  type Mutation {
  postTweet(text: String!, userId: ID!): Tweet!
  deleteTweet(id: ID!): Boolean!
  }
  
  type User {
  id: ID!
  firstName: String!
  lastName: String!
  fullName: String!
  }
  
  type Tweet {
  id: ID
  text: String
  author: User
  }
`;