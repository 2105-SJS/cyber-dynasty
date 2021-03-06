const { client } = require('./client');

const getOrderProductById = async (id) => {
    try {
        const { rows: [orderProducts]} = await client.query(`
            SELECT * 
            FROM order_products
            WHERE id=$1
        `, [id]);
        return orderProducts;
    } catch (error) {
        throw error;
    }
}

const createOrderProduct = async ({ orderId, productId, price, quantity }) => {
    try {
        const {rows: [orderProduct]} = await client.query(`
            INSERT INTO order_products("orderId", "productId", price, quantity)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `, [orderId, productId, price, quantity]);
        return orderProduct;
    } catch (error) {
        throw error;
    }
}

const addProductToOrder = async ({ orderId, productId, price, quantity }) => {
    try {
        const {rows: orderProducts} = await client.query(`
            SELECT * FROM order_products
            WHERE "orderId"=$1
        `, [orderId]);
        let isInOrder = false;
        let foundOrderProduct = orderProducts[0];
        orderProducts.forEach(orderProduct =>{
            if(orderProduct.productId === productId) {
                foundOrderProduct = orderProduct;
                isInOrder = true;
            }
        })
        if (!isInOrder) {
           const newOrderProduct = await createOrderProduct({ orderId, productId, price, quantity });
           return newOrderProduct;
        }
        let addProduct = {}
        if (foundOrderProduct.price != price) {
            const {rows} = await client.query(`
                UPDATE order_products
                SET price=$1
                WHERE id = $2
                RETURNING *;
            `, [price, foundOrderProduct.id]);
            addProduct = rows
        }
        if (foundOrderProduct.quantity != quantity) {
            const { rows } = await client.query(`
                UPDATE order_products
                SET quantity=$1
                WHERE id=$2
                RETURNING *;
            `, [quantity, foundOrderProduct.id]);
            addProduct = rows;
        }
        return addProduct;
    } catch (error) {
        throw error
    }
}

const updateOrderProduct = async ({ id, price, quantity }) => {
    try {
        const {rows: updatedOrderProduct } = await client.query(`
            UPDATE order_products
            SET price = $1, quantity = $2
            WHERE id = $3
            RETURNING *;
        `, [price, quantity, id]);
        return updatedOrderProduct;
    } catch (error) {
        throw error;
    }
}

const destroyOrderProduct = async (id) => {
    try {
       const { rows: [deletedItem] } = await client.query(`
            DELETE FROM order_products
            WHERE id = $1
            RETURNING *;
        `, [id]);
        return deletedItem;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getOrderProductById,
    addProductToOrder,
    updateOrderProduct,
    destroyOrderProduct
}