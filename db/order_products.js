const { client } = require('./client');

const getOrderProductById = async (id) => {
    try {
        const orderProducts = await client.query(`
            SELECT * from order_products
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
        const isInOrder = false;
        const foundOrderProduct = orderProducts[0];
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
            addProduct = await client.query(`
                UPDATE order_products
                SET (price = $1)
                WHERE id = $2
                RETURNING *;
            `, [price, foundOrderProduct.id]);
        }
        if (foundOrderProduct.quantity != quantity) {
            addProduct = await client.query(`
                UPDATE order_products
                SET (quantity = $1)
                WHERE id=$2
                RETURNING *;
            `, [quantity, foundOrderProduct.id]);
        }
        return addProduct;
    } catch (error) {
        throw error
    }
}

const updateOrderProduct = async ({ id, price, quantity }) => {
    try {
        const updatedOrderProduct = await client.query(`
            UPDATE order_products
            SET (price = $1, quantity = $2)
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
        const deletedOrderProduct = await client.query(`
            DELETE order_products
            WHERE id = $1
            RETURNING *;
        `, [id]);
        return deletedOrderProduct;
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