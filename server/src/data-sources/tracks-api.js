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

  async getTrack(id) {
    return this.get(`track/${encodeURIComponent(id)}`);
  }

  async getTrackModules(id) {
    return this.get(`track/${encodeURIComponent(id)}/modules`);
  }

  async incrementTrackViews(id) {
    return this.patch(`track/${encodeURIComponent(id)}/numberOfViews`);
  }
}

module.exports = TracksAPI;
