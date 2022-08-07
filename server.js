import { ApolloServer, gql } from "apollo-server";
// const { ApolloServer, gql } = require("apollo-server");

import {typeDefs} from "./schema.js";
import {resolvers} from "./resolvers.js";




const server = new ApolloServer({ typeDefs,resolvers });

server.listen().then(({ url }) => {
    console.log(`Running and URL:  ${url}`);
});
