const axios = require("axios");

const API_URL = "https://jobs.github.com/positions";

module.exports = {
  jobs: async () => {
    try {
      const allJobs = await axios.get(`${API_URL}.json`);
      return allJobs.data.map((job) => ({
        id: job.id,
        title: job.title,
        type: job.type,
        company: job.company,
        created_at: job.created_at,
        url: job.url,
        description: job.description,
        location: job.location,
        how_to_apply: job.how_to_apply,
        company_logo: job.company_logo,
      }));
    } catch (error) {
      throw error;
    }
  },
  job: async (req, res) => {
    try {
      const singleJob = await axios.get(`${API_URL}/${req.id}.json`);
      return {
        id: singleJob.data.id,
        title: singleJob.data.title,
        type: singleJob.data.type,
        company: singleJob.data.company,
        description: singleJob.data.company,
        url: singleJob.data.url,
        location: singleJob.data.location,
        created_at: singleJob.data.created_at,
        how_to_apply: singleJob.data.how_to_apply,
        company_logo: singleJob.data.company_logo,
      };
    } catch (error) {
      throw error;
    }
  },
};
