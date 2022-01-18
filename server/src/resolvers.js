const { ApolloError } = require("apollo-server");

const resolvers = {
  Query: {
    // Returns an array of featured Tracks used
    // to populate the card grid on the home page
    featuredTracks: (_, __, context) => {
      try {
        const {
          dataSources: { tracksAPI },
        } = context;

        return tracksAPI.getFeaturedTracks();
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
  Track: {
    author: (parent, _, context) => {
      try {
        const { authorId: id } = parent;
        const {
          dataSources: { tracksAPI },
        } = context;

        return tracksAPI.getAuthor(id);
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
};

module.exports = resolvers;
