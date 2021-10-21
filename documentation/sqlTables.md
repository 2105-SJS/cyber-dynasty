## Table Definitions


### `products` table
| Name | Type |
| ----------- | ---- | 
|id SERIAL | PRIMARY KEY |
|inventory  |INTEGER DEFAULT 10 NOT NULL |
|brand  |TEXT NOT NULL |
|colorway  |TEXT NOT NULL |
|name | TEXT NOT NULL |
|release  |TEXT DEFAULT "xxxx-xx-xx" |
|"retailPrice" | NUMBER NOT NULL |
|"inStock" | NOT NULL DEFAULT VALUE false |
|"img1" | TEXT DEFAULT (img) |
|"img2" | TEXT DEFAULT (img) |
|"img3" | TEXT DEFAULT (img) |

### `users` table
| Name | Type |
| ----------- | ---- | 
|id | SERIAL PRIMARY KEY|
|"firstName" | NOT NULL|
|"lastName" | NOT NULL|
|email TEXT | NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1)|
|"imgURL" | DEFAULT "https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg"|
|username | UNIQUE NOT NULL|
|password | UNIQUE NOT NULL|
|"isAdmin" | NOT NULL DEFAULT VALUE false|

### `orders` table
| Name | Type |
| ----------- | ---- | 
|id  |SERIAL PRIMARY KEY |
|status  |DEFAULT "created" |
|"userId" | REFERENCES users(id) |
|"datePlaced" | DATE |
### `order_products` table
| Name | Type |
| ----------- | ---- | 
|id | SERIAL PRIMARY KEY |
|"productId"| REFERENCES products(id) |
|"orderId" |REFERENCES orders(id) |
|price| NOT NULL |
|quantity |NOT NULL DEFAULT VALUE 0 |