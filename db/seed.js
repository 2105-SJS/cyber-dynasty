const {client} = require('./index')

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
          release TEXT DEFAULT "xxxx-xx-xx",
          "retailPrice" NUMBER NOT NULL,
          "inStock" NOT NULL DEFAULT VALUE false,
          "img1" TEXT DEFAULT (img),
          "img2" TEXT DEFAULT (img),
          "img3" TEXT DEFAULT (img)
        )
      `);
  
      await client.query(`
          CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            "firstName" NOT NULL,
            "lastName" NOT NULL,
            email TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
            "imgURL" DEFAULT "https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg",
            username UNIQUE NOT NULL,
            password UNIQUE NOT NULL,
            "isAdmin" NOT NULL DEFAULT VALUE false
          )
      `);
  
      await client.query(`
            CREATE TABLE orders (
              id SERIAL PRIMARY KEY,
              status DEFAULT "created",
              "userId" REFERENCES users(id),
              "datePlaced" DATE
            )
      `);
  
      await client.query(`
            CREATE TABLE order_products (
              id SERIAL PRIMARY KEY,
              "productId" REFERENCES products(id),
              "orderId" REFERENCES orders(id),
              price NOT NULL,
              quantity NOT NULL DEFAULT VALUE 0
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