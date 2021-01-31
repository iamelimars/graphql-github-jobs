const { ApolloServer } = require("apollo-server");

const typeDefs = require("./graphql/apolloSchema");
const resolvers = require("./graphql/apolloResolvers");
const JobsApi = require("./graphql/datasources/job");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      jobsApi: new JobsApi(),
    };
  },
  playground: {
    endpoint: "/graphql",
  },
});

server.listen(3500).then(({ url }) => console.log(`Server running at ${url}`));
