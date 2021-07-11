const { mongoURI, dataBaseName } = require('../../config.json');
const { MongoClient } = require('mongodb');

const connect = async () => {
  const conn = await MongoClient.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return conn.db(dataBaseName);
};

const insertOne = async (collectionName, input) => {
  const db = await connect();
  const coll = await db.collection(collectionName);
  await coll.insertOne(input);
  return true;
}

const find = async (collectionName, filter) => {
  const db = await connect();
  const coll = await db.collection(collectionName);
  return coll.find(filter).toArray();
}

module.exports = {
  insertOne,
  find
}

