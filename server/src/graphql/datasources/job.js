const { RESTDataSource } = require("apollo-datasource-rest");

class JobsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jobs.github.com/";
  }

  async getAllJobs() {
    return this.get("/positions.json");
  }
  async getJobById(id) {
    return this.get(`/positions/${id}.json`);
  }
}

module.exports = JobsApi;
