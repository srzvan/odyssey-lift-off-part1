const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Get the tracks array for the home page"
    featuredTracks: [Track!]!
  }

  "A Track is a collection of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    length: Int
    title: String!
    author: Author!
    thumbnail: String
    modulesCount: Int
  }

  "An Author is an entity that creates complete Tracks and/or Modules"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
