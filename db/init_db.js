// code to build and initialize DB goes here
const {
  client
} = require('./client');
const { dropTables, createTables } = require('./seed')
const { createProduct, getAllProducts, getProductById } = require('./products');
const { newProducts } = require('../sneakerapi/SneakerData')

const { all } = require('../routes');
const { createOrder } = require('.');

async function buildTables() {
  try {
    await client.connect();
    console.log("Starting dropping the tables........")
    await dropTables();

    console.log("Drop table success, Starting creating the tables.....")
    await createTables();

    console.log("Success creating the tables!!")
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    console.log("we made it")
    await newProducts();
    const allProducts = await getAllProducts();
    const newOrder = await createOrder({status: "created", userId: "1"})
    const byId = await getProductById(1);
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  // .finally(() => client.end());