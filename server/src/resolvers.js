const resolvers = {
  Query: {
    // Returns an array of featured Tracks used
    // to populate the card grid on the home page
    featuredTracks: (_, __, context) => {
      const {
        dataSources: {
          tracksAPI: { getFeaturedTracks },
        },
      } = context;

      return getFeaturedTracks();
    },
  },
  Track: {
    author: (parent, _, context) => {
      const { authorId: id } = parent;
      const {
        dataSources: {
          tracksAPI: { getAuthor },
        },
      } = context;

      return getAuthor(id);
    },
  },
};

module.exports = resolvers;
