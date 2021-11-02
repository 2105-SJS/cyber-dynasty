// code to build and initialize DB goes here
const {
  client
} = require('./client');
const { dropTables, createTables } = require('./seed')
const { createProduct,
  getAllProducts,
  getProductById } = require('./products');
const { newProducts } = require('../sneakerapi/SneakerData')

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
    const product1 = await createProduct({inventory: 5, brand: 'Nike', colorway: 'blue', shoeName: 'Air', retailPrice: 50, inStock: true, releaseDate: '2004-03-04', thumbnail: "image", resellPrice: 30});
    console.log("we made it")
    await newProducts();
    const allProducts = await getAllProducts();
    const byId = await getProductById(1);
    console.log('allProducts: ', allProducts )
    console.log('ById: ', byId )
    console.log("ShiB FRRRRRRR", allProducts.length)
  } catch (error) {
    throw error;
  }
}


buildTables()
  .then(populateInitialData)
  .catch(console.error)
  // .finally(() => client.end());