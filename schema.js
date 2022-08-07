import {gql} from "apollo-server";

export const typeDefs = gql`
    
  type Query {
      allUsers: [User!]!
      allTweets: [Tweet]
      tweet(id: ID): Tweet
      ping : String
      allMovies: [Movie!]!
  }

  """
  TEST
  """
  type Mutation {
      postTweet(text: String!, userId: ID!): Tweet!
      deleteTweet(id: ID!): Boolean!
  }
  
  type User {
      id: ID!
      firstName: String!
      lastName: String!
      """
      fullName = FirstName + LastName
      """
      fullName: String!
    }
  
  """
  Tweet Schema 구조
  """
  type Tweet {
      id: ID
      text: String
      author: User
  }
  
  type Torrents {
      url : String! 
      hash : String! 
      quality : String! 
      type : String! 
      seeds : Int!
      peers : Int!
      size : String! 
      size_bytes : Int!
      date_uploaded : String! 
      date_uploaded_unix : Int!
  }
  
  type Movie {
      id : Int! 
      url : String! 
      imdb_code : String! 
      title : String! 
      title_english : String! 
      title_long : String! 
      slug : String! 
      year : Int! 
      rating : Int! 
      runtime : Float! 
      genres : [String!]! 
      summary : String! 
      description_full : String! 
      synopsis : String! 
      yt_trailer_code : String! 
      language : String! 
      mpa_rating : String! 
      background_image : String! 
      background_image_original : String! 
      small_cover_image : String! 
      medium_cover_image : String! 
      large_cover_image : String! 
      state : String! 
      torrents : [Torrents!]!
      date_uploaded : String! 
      date_uploaded_unix : Int! 
      
  }
`;


























