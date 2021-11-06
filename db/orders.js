const {client} = require('./client')

const getOrderById=async (id)=>{
try{
        if(!id)throw Error('missing order id')
        const {rows:[order]}= await client.query(`
        SELECT * FROM orders
        WHERE id=$1`,[id])
        const { rows: products} = await client.query(`
            SELECT * FROM products
            JOIN order_products ON products.id=order_products."productId"
            WHERE order_products."orderId"=$1
        `, [id]);
        order.products = products;
        return order;
    }catch(error){
        throw error
    }
}

const getAllOrders = async  () =>{
    try {
        const {rows:orders}= await client.query(`SELECT * FROM orders`)
        orders.forEach(order => {
            const { rows: products} = await client.query(`
            SELECT * FROM products
            JOIN order_products ON products.id=order_products."productId"
            WHERE order_products."orderId"=$1
        `, [order.id]);
        order.products = products;
        })
        return orders
    } catch(error){
        throw error
    }
}

const getOrdersByUser = async ({id})=>{
    try{
        if(!id)throw Error('missing user id')
        const {rows:order} = await client.query(`
            SELECT * from orders 
            WHERE "userId" = $1
            `, [id]);
        const { rows: products} = await client.query(`
            SELECT * FROM products
            JOIN order_products ON products.id=order_products."productId"
            WHERE order_products."orderId"=$1
        `, [id]);
        order.products = products;
        return order
    }catch(error){
        throw error
    }
}

const getOrderByProduct = async ({id}) => {
    try {
        const { rows: orders} = await client.query(`
            SELECT * FROM orders
            JOIN order_products ON orders.id=order_products."orderId"
            WHERE order_products."productId"=$1
        `, [id]);
        orders.forEach(order => {
            const { rows: products} = await client.query(`
            SELECT * FROM products
            JOIN order_products ON products.id=order_products."productId"
            WHERE order_products."orderId"=$1
        `, [order.id])
        order.products = products})
        return orders;
    } catch (error) {
        throw error;
    }
}

const getCartByUser = async ({id}) =>{
    try{
        if(!id) throw Error('missing id Parameter')
        const {rows:[cart]} = await client.query(`
            SELECT * FROM orders
            WHERE "userId"=$1 AND status='created'`, [id])
        const { rows: products} = await client.query(`
            SELECT * FROM products
            JOIN order_products ON products.id=order_products."productId"
            WHERE order_products."orderId"=$1
        `, [id]);
        cart.products = products;
        return cart
    }catch(error){
        throw error
    }
} 

const createOrder = async ({status, userId}) =>{
    try{
        if(!status){status='created'}
        if(!userId)throw Error('missing userId')
        const  {rows: [order]} = await  client.query(`
        INSERT INTO orders(status, "userId")
        VALUES($1, $2)
        RETURNING *
        `,[status, userId])
        return order
    } catch(error){
        throw error
    }
}

module.exports = {
    getOrderById,
    getAllOrders,
    getCartByUser,
    getOrdersByUser,
    getOrderByProduct,
    createOrder
}