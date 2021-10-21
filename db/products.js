const { client } = require('./index');

const createProduct = async ({inventory, brand, colorway, release, retailPrice, inStock, img1, img2, img3 }) => {
  try {
    const {rows: [product] } = await client.query(`
    INSERT INTO products(inventory, brand, colorway, release, "retailPrice", "inStock", "img1", "img2", "img3")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *;
    `, [inventory, brand, colorway, release, retailPrice, inStock, img1, img2, img3]);
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