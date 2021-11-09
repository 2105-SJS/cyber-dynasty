
//import your stuff here
const { addProductToOrder } = require("../db/order_products")
const { createOrder, createProduct } = require("../db") 
const { createUser } = require("../db/users")
const { cancelOrder, completeOrder, getAllOrders } = require("../db/orders")

const test = async ()=>{//all orders work
    console.log('Starting Tests')
    try{
        //right your test here
        // const user = await createUser({firstName: "something", lastName: "something", email: "something@email.com", username: "something12", password: "password12"})
        // const testing = await addProductToOrder({orderId: 1, productId: 1, price: 50, quantity: 1})
        // console.log("new", testing);
        
        // const order = await createOrder({status: "created", userId: 1})
        // const orders = await getAllOrders()
        // console.log(orders)
        // const canceledOrder = await cancelOrder(4)
        // const completedOrder = await completeOrder(4)
        // console.log({ canceledOrder, completedOrder})


        
   }catch(error){
       throw(error)
   }finally{
       console.log('tests are done')
   }
}

module.exports ={
    test
}
