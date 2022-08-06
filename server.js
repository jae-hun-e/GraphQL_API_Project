import { ApolloServer, gql } from "apollo-server";
import {tweets} from "./dummyData.js";
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
        ping : String
    }

    type Mutation {
        postTweet(text: String!, userId: ID!): Tweet!
        deleteTweet(id: ID): Boolean
    }
`;

const resolvers = {
    Query : {
        allTweets(){
            return tweets
        },
        tweet( __ , {id}){
            return tweets.find(data => data.id === id)
        },
    },
    Mutation: {
        postTweet(__, {text, userId}){
            const newTweet = {
                id : (tweets.length +1).toString(),
                text,
            }
            tweets.push(newTweet)
            return newTweet
        },
        deleteTweet(__, {id}){
            const delTweet = tweets.find(tweet => tweet.id === id)
            if(!delTweet) return false
            //TODO 만약 JS로 delete를 구현한다면 recoil, contextAPI를 이용한 전영상태관리가 필요
            const newTweets = tweets.filter(tweet => tweet !== id)
            return true
        }
    }
}

const server = new ApolloServer({ typeDefs,resolvers });

server.listen().then(({ url }) => {
    console.log(`Running and URL:  ${url}`);
});
