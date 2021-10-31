const {
    getOrderById,
    getAllOrders,
    getOrdersByUser,
    getCartByUser,
    createOrder
} = require('../db/orders')



const testOrders = async ()=>{

    try{

        console.log('starting')

        const order1 = await getOrderById(1)
        console.log('getordebyid',order1 )
        
        const orders = await getAllOrders()
        console.log('getAllOrders',orders )
        
        const userOrders = await getOrdersByUser(1)
        
        console.log('getOrdersByUser',userOrders )
        const userCart = await getCartByUser(1)
        console.log('getOrdersByUser',userOrders )
        
        const createdOrder = await createOrder('created', 1)





        console.log('done')
    }catch(error){
        throw error
    }


}