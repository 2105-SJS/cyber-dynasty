const { client } = require('./index')

async function dropTables() {
    try {
      await client.query(`
        DROP TABLE IF EXISTS order_products;
        DROP TABLE IF EXISTS orders;
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS products;
      `);
    } catch (error) {
      console.log("Error dropping tables!");
      throw error;
    }
  }

async function createTables() {
    try {
        await client.query(`
        CREATE TABLE products (
          id SERIAL PRIMARY KEY,
          inventory INTEGER DEFAULT 10 NOT NULL,
          brand TEXT NOT NULL,
          colorway TEXT NOT NULL,
          name TEXT NOT NULL,
          release TEXT DEFAULT 'xxxx-xx-xx',
          "retailPrice" NUMERIC NOT NULL,
          "inStock" BOOLEAN DEFAULT false,
          "img1" TEXT DEFAULT 'img',
          "img2" TEXT DEFAULT 'img',
          "img3" TEXT DEFAULT 'img'
        )
      `);
  
      await client.query(`
          CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            "firstName" VARCHAR(255) NOT NULL,
            "lastName" VARCHAR(255) NOT NULL,
            email TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
            "imgURL" TEXT DEFAULT 'https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg',
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) UNIQUE NOT NULL,
            "isAdmin" BOOLEAN DEFAULT false
          )
      `);
  
      await client.query(`
            CREATE TABLE orders (
              id SERIAL PRIMARY KEY,
              status TEXT DEFAULT 'created',
              "userId" INTEGER REFERENCES users(id),
              "datePlaced" DATE
            )
      `);
  
      await client.query(`
            CREATE TABLE order_products (
              id SERIAL PRIMARY KEY,
              "productId" INTEGER REFERENCES products(id),
              "orderId" INTEGER REFERENCES orders(id),
              price NUMERIC NOT NULL,
              quantity INTEGER NOT NULL DEFAULT 0
            )
      `);
      } catch (error) {
          console.log("Error Creating tables");
          throw error;
      }
  }

  module.exports = {
      dropTables,
      createTables
  }