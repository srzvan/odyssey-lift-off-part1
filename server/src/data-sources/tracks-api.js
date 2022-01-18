const { RESTDataSource } = require("apollo-datasource-rest");

class TracksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }

  async getFeaturedTracks() {
    return this.get("tracks");
  }

  async getAuthor(id) {
    return this.get(`author/${encodeURIComponent(id)}`);
  }
}

module.exports = TracksAPI;
