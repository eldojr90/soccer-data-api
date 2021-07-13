const { gql } = require('apollo-server');

module.exports = gql`
type League {
    _id: ID!
    name: String!
    country: String!
}

input LeagueInput {
    name: String!
    country: String!
}

type Query {
    players(filter: String): [League]
}

type Mutation {
    createLeague(input: LeagueInput!): Boolean
}
`;