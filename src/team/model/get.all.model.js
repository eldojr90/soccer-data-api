const { db } = require('../../../lib');

module.exports = filter => db.find('teams', filter);