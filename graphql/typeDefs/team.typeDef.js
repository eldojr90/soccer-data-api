const { gql } = require('apollo-server');

module.exports = gql`
type Team {
    _id: ID!
    name: String!
    league: League!
    capital: Float!
}

input TeamInput {
    name: String!
    league: League!
    capital: Float!
}

type Query {
    teams(name: String): [Team]
}

type Mutation {
    createTeam(input: TeamInput!): Boolean
}
`;