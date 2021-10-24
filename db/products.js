const { parseComplete } = require('pg-protocol/dist/messages');
const { client } = require('./client');

const createProduct = async ({inventory, brand, colorway, shoeName,  releaseDate, retailPrice, inStock, thumbnail, resellPrice }) => {
  try {
    console.log('brand: ', brand)
    console.log('colorway: ', colorway)
    console.log('name: ', name)
    console.log('retailprice: ', retailPrice)
    //Throws Error if Required Parameters are missing
    if (!brand || !colorway || !shoeName || !retailPrice || !inventory || !releaseDate || !inStock || !thumbnail ){
      throw Error('Missing Required Parameters')
    }

    const {rows: [product] } = await client.query(`
    INSERT INTO products(inventory, brand, colorway, "shoeName",  "releaseDate", "retailPrice", "inStock", thumbnail, "resellPrice")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *;
    `, [inventory, brand, colorway, shoeName,  releaseDate, retailPrice, inStock, thumbnail, resellPrice]);
    return product;
  } catch (error) {
    throw error
  }

}

const getAllProducts = async () => {
  try {
    const {rows: products} = await client.query(`
      SELECT *
      FROM products;
    `);
    return products;
  } catch (error) {
    throw error;
  }
}

const getProductById = async (productId) => {
  try {
    const {rows: [product]} = await client.query(`
      SELECT * 
      FROM products
      WHERE id = $1;
    `, [productId]);
    return product;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById
}