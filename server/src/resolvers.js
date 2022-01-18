const { ApolloError } = require("apollo-server");

const resolvers = {
  Query: {
    // Get the array of featured Tracks
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
    // Get a single track by id
    track: (_, args, context) => {
      try {
        const { id } = args;
        const {
          dataSources: { tracksAPI },
        } = context;

        return tracksAPI.getTrack(id);
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
    modules: (parent, _, context) => {
      try {
        const { id } = parent;
        const {
          dataSources: { tracksAPI },
        } = context;

        return tracksAPI.getTrackModules(id);
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
};

module.exports = resolvers;
