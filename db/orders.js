const {client} = require('./client')


//TODO: add products to order
const getOrderById=(id)=>{
try{
        if(!id)throw Error('missing order id')
        const {rows:[order]}=client.query(`
        SELECT * FROM orders
        WHERE id=$1`,[id])
        return order;

    }catch(error){
        throw error
    }
}

const getAllOrders = () =>{
    try{

        const {rows:orders}=client.query(`SELECT * FROM orders`)

        return orders
    }catch(error){
        throw error
    }
}

const getOrderByUser = ({id})=>{
    try{
        if(!id)throw Error('missing user id')

        const {rows:[order]} = client.query(`
        SELECT * from orders 
        WHERE "userId" = $1
        `, [id])
    }catch(error){
        throw error
    }
}


















module.exports = {
    getOrderById,





}