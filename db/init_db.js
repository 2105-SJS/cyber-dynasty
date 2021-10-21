// code to build and initialize DB goes here
const {
  client,
  // other db methods 
} = require('./index');
const { dropTables, createTables } = require('./seed')

async function buildTables() {
  try {
    client.connect();
    dropTables();
    createTables();
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());