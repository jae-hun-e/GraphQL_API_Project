import { tweets, users } from "./dummyData.js";
import fetch from "node-fetch";
// Get /text
// Get /age
export const resolvers = {
  Query: {
    allTweets() {
      console.log("allTweets called");
      return tweets;
    },
    tweet(__, { id }) {
      console.log("tweet called");
      return tweets.find((data) => data.id === id);
    },
    allUsers() {
      console.log("allUsers called");
      return users;
    },
    allMovies() {
      console.log("allMovies called");
      const moviesData = fetch("https://yts.mx/api/v2/list_movies.json")
        .then((r) => r.json())
        .then((json) => json.data.movies);
      return moviesData;
    },
    movie(__, { id }) {
      console.log("movie called");
      const movieData = fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
        .then((r) => r.json())
        .then((json) => json.data.movie);
      return movieData;
    },
  },
  Mutation: {
    postTweet(__, { text, userId }) {
      const newTweet = {
        id: (tweets.length + 1).toString(),
        text,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(__, { id }) {
      const delTweet = tweets.find((tweet) => tweet.id === id);
      if (!delTweet) return false;
      //TODO 만약 JS로 delete를 구현한다면 recoil, contextAPI를 이용한 전영상태관리가 필요
      tweets = tweets.filter((tweet) => tweet !== id);
      return true;
    },
  },
  User: {
    fullName({ firstName, lastName }) {
      // root args = users Obj
      // console.log(firstName, lastName) // fullName을 호출하는 User를 보게된다
      // console.log("fullName")
      return `${firstName}${lastName}`;
    },
  },
  Tweet: {
    author(root) {
      // root args = tweets Obj
      console.log(root);
      console.log("tweet resolver called");
      return users.find((user) => user.id === root.userId);
    },
  },
};
