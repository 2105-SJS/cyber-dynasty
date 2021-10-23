const { parseComplete } = require('pg-protocol/dist/messages');
const { client } = require('./client');

const createProduct = async ({inventory, brand, colorway, name,  release, retailprice, inStock, img1, img2, img3 }) => {
  try {
    //Throws Error if Required Parameters are missing
    if (!brand || !colorway || !name || !retailprice  ){
      throw Error('Missing Required Parameters')
    }
    //Creates Fields
    let params = {brand, colorway, name, retailprice}
    if (inventory) params['inventory']= inventory
    if (release) params['release'] = release
    if (inStock) params['inStock'] = inStock
    if (img1) params['img1']=img1
    if (img2) params['img2']=img2
    if (img3) params['img3']=img3

    //Gives us the ($1, $2, $3)
    let numbersArray = Object.keys(params).map((parameter, idx)=>{

      return ('$'+(idx+1))
    })
    const numbers = numbersArray.join(', ')

    const {rows: [product] } = await client.query(`
    INSERT INTO products(${Object.keys(params).join(', ')})
    VALUES (${numbers})
    RETURNING *;
    `, Object.values(params));
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