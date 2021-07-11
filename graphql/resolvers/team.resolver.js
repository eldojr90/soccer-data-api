const { createService, getAllService } = require('../../src/team')

module.exports = {
    Query: {
        teams: (parent, args, context) => getAllService(args.filter)
    },
    Mutation: {
        createTeam: (parent, args, context) => createService(args.input)
    }
}