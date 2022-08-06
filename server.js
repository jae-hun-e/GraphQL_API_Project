import { ApolloServer, gql } from "apollo-server";
// const { ApolloServer, gql } = require("apollo-server");

// Get /text
// Get /age

const typeDefs = gql`
    type User {
        id: ID
        userName: String
    }

    type Tweet {
        id: ID
        text: String
        author: User
    }

    type Query {
        allTweets: [Tweet]
        tweet(id: ID): Tweet
        ping: String!
    }

    type Mutation {
        postTweet(text: String, userId: ID): Tweet
        deleteTweet(id: ID): Boolean
    }
`;

const resolvers = {
    Query : {
        tweet(){
            console.log("승호 똥란 핼로~")
            return null
        },
        ping(){
            return "pong!"
        }
    }
}

const server = new ApolloServer({ typeDefs,resolvers });

server.listen().then(({ url }) => {
    console.log(`Running and URL:  ${url}`);
});
