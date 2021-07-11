const { db } = require('../../../lib');

module.exports = async input => {
    await db.insertOne('teams', input)
    return true;
};