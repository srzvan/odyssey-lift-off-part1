const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const TracksAPI = require("./data-sources/tracks-api");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    tracksAPI: new TracksAPI(),
  }),
});

server.listen().then(() => {
  console.log(`
  🚀  Server is running!
  🔉  Listening on port 4000
  📭  Query at https://studio.apollographql.com/dev
  `);
});
