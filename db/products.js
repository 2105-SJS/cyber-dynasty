const { parseComplete } = require('pg-protocol/dist/messages');
const { client } = require('./client');

const createProduct = async ({inventory, brand, colorway, name,  release, retailPrice, inStock, img1, img2, img3 }) => {
  try {
    console.log('brand: ', brand)
    console.log('colorway: ', colorway)
    console.log('name: ', name)
    console.log('retailprice: ', retailPrice)
    //Throws Error if Required Parameters are missing
    if (!brand || !colorway || !name || !retailPrice || !inventory || !release || !inStock || !img1 || !img2 || !img3 ){
      throw Error('Missing Required Parameters')
    }

    const {rows: [product] } = await client.query(`
    INSERT INTO products(inventory, brand, colorway, name,  release, "retailPrice", "inStock", "img1", "img2", "img3")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *;
    `, [inventory, brand, colorway, name,  release, retailPrice, inStock, img1, img2, img3]);
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