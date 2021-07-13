const { gql } = require('apollo-server');

module.exports = gql`
type Player {
    _id: ID!
    name: String!
    team: Team!
    position: String!
}

input PlayerInput {
    name: String!
    team: Team!
    position: String!
}

type Query {
    players(name: String): [Player]
}

type Mutation {
    createPlayer(input: PlayerInput!): Boolean
}
`;