const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Get the Tracks array for the home page"
    featuredTracks: [Track!]!
    "Get a specific Track by id"
    track(id: ID!): Track
  }

  "A Track is a collection of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "Track length in seconds"
    length: Int
    "Title of the Track"
    title: String!
    "Author of the Track"
    author: Author!
    "URL for Track thumbnail"
    thumbnail: String
    "Number of Modules that make up the Track"
    modulesCount: Int
    "The number of times the Track has been viewed"
    numberOfViews: Int
    "The Track's complete description (can be in Markdown format)"
    description: String
    "The Track's complete array of Modules"
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "Module title"
    title: String!
    "Module length in seconds"
    length: Int
  }

  "An Author is an entity that creates complete Tracks and/or Modules"
  type Author {
    id: ID!
    "Author full name"
    name: String!
    "URL for Author photo"
    photo: String
  }
`;

module.exports = typeDefs;
