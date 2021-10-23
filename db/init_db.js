// code to build and initialize DB goes here
const {
  client
} = require('./client');
const { dropTables, createTables } = require('./seed')
const { createProduct,
  getAllProducts,
  getProductById } = require('./products');
const { all } = require('../routes');

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
    const product1 = await createProduct({inventory: 5, brand: 'Nike', colorway: 'blue', name: 'Air', retailPrice: 50, inStock: true});
    const allProducts = await getAllProducts();
    const byId = await getProductById(1);
    console.log('Product: ', product1 )
    console.log('allProducts: ', allProducts )
    console.log('ById: ', byId )
  } catch (error) {
    throw error;
  }
}


buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());