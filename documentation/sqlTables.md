## Table Definitions


### `products` table
| Name | Type |
| ----------- | ---- | 
|id SERIAL | PRIMARY KEY |
|inventory  |INTEGER DEFAULT 10 NOT NULL |
|brand  |TEXT NOT NULL |
|colorway  |TEXT NOT NULL |
|"shoeName" | TEXT NOT NULL |
|"releaseDate"  |TEXT DEFAULT "xxxx-xx-xx" |
|"retailPrice" | NUMBER NOT NULL |
|"inStock" | NOT NULL DEFAULT VALUE false |
|thumbnail | TEXT DEFAULT (img) |
|"resellPrice" | NUMERIC NOT NULL |

### `users` table
| Name | Type |
| ----------- | ---- | 
|id | SERIAL PRIMARY KEY|
|"firstName" | VARCHAR(255) NOT NULL|
|"lastName" | VARCHAR(255) NOT NULL|
|email TEXT | NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1)|
|"imgURL" | TEXT DEFAULT "https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg"|
|username | VARCHAR(255) UNIQUE NOT NULL|
|password | VARCHAR(255) UNIQUE NOT NULL|
|"isAdmin" | BOOLEAN DEFAULT false|

### `orders` table
| Name | Type |
| ----------- | ---- | 
|id  | SERIAL PRIMARY KEY |
|status  | TEXT DEFAULT "created" |
|"userId" | REFERENCES users(id) |
|"datePlaced" | DATE |

### `order_products` table
| Name | Type |
| ----------- | ---- | 
|id | SERIAL PRIMARY KEY |
|"productId"| INTEGER REFERENCES products(id) |
|"orderId" | INTEGER REFERENCES orders(id) |
|price | NUMERIC NOT NULL |
|quantity | INTEGER NOT NULL DEFAULT 0 |