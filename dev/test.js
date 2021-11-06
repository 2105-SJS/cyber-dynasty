
//import your stuff here
const { addProductToOrder } = require("../db/order_products")
const { createOrder, createProduct } = require("../db") 
const { createUser } = require("../db/users")

const test = async ()=>{//all orders work
    console.log('Starting Tests')
    try{
        //right your test here
        // const user = await createUser({firstName: "something", lastName: "something", email: "something@email.com", username: "something12", password: "password12"})
        // const order = await createOrder({status: "created", userId: 1})
        const testing = await addProductToOrder({orderId: 1, productId: 1, price: 50, quantity: 1})
        console.log("new", testing);




        
   }catch(error){
       throw(error)
   }finally{
       console.log('tests are done')
   }
}

module.exports ={
    test
}
