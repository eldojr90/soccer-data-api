const { gql } = require('apollo-server');

module.exports = gql`
type Team {
    _id: ID!
    name: String!
    league: String!
    capital: Float!
}

input TeamInput {
    name: String!
    league: String!
    capital: Float!
}

input TeamFilter {
    name: String
    league: String
    capital: Float
}

type Query {
    teams(filter: TeamFilter!): [Team]
}

type Mutation {
    createTeam(input: TeamInput!): Boolean
}
`;