const resolvers = {
  Query: {
    // Returns an array of featured Tracks used
    // to populate the card grid on the home page
    featuredTracks: (_, __, context) => {
      const {
        dataSources: { tracksAPI },
      } = context;

      return tracksAPI.getFeaturedTracks();
    },
  },
  Track: {
    author: (parent, _, context) => {
      const { authorId: id } = parent;
      const {
        dataSources: { tracksAPI },
      } = context;

      return tracksAPI.getAuthor(id);
    },
  },
};

module.exports = resolvers;
