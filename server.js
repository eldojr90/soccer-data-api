const { ApolloServer, gql } = require('apollo-server')
const { typeDefs, resolvers } = require('./graphql');

const server = new ApolloServer({ typeDefs, resolvers });

const port = 6969;
server.listen(port).then(() => console.log(`Server running at port ${port}`));