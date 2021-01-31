module.exports = {
  Query: {
    jobs: async (parent, args, { dataSources }) => {
      try {
        const allJobs = await dataSources.jobsApi.getAllJobs();
        return allJobs.map((job) => ({
          id: job.id,
          title: job.title,
          type: job.type,
          company: {
            name: job.company,
            logo_url: job.company_logo,
            url: job.company_url,
          },
          created_at: job.created_at,
          url: job.url,
          description: job.description,
          location: job.location,
          how_to_apply: job.how_to_apply,
        }));
      } catch (error) {
        throw error;
      }
    },
    job: async (parent, { id }, { dataSources }) => {
      try {
        const job = await dataSources.jobsApi.getJobById(id);
        return {
          id: job.id,
          title: job.title,
          type: job.type,
          company: {
            name: job.company,
            logo_url: job.company_logo,
            url: job.company_url,
          },
          created_at: job.created_at,
          url: job.url,
          description: job.description,
          location: job.location,
          how_to_apply: job.how_to_apply,
        };
      } catch (error) {
        throw error;
      }
    },
  },
};
