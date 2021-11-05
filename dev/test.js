const {
    getOrderById,
    getAllOrders,
    getOrdersByUser,
    getCartByUser,
    createOrder
} = require('../db/orders')
const {
     createUser,
     getAllUsers,
     getUserById,
     getUserByUsername
} = require('../db/users')

const {
    getAllProducts
} = require('../db/products')



const testOrders = async ()=>{//all orders work

    try{
        console.log('xxxxxxxxx')

        const prod = await getAllProducts()
        console.log('prod',prod )
        // const user = await createUser({
        //     firstName:'xfdsfdsf',
        //     lastName:'mdfsdfdsfd',
        //     username:'omgOmgojmg',
        //     password:'dankboHy12hj3',
        //     email:'x.looera.d@gma.com'
        // })
        console.log('starting')
        
        // const createdOrder2 = await createOrder({
        //     status:'created', userId:1})
        const order1 = await getOrderById(1)
        console.log('getordebyid',order1 )//check
        
        const orders = await getAllOrders()
        console.log('getAllOrders',orders )//check
        
        const userOrders = await getOrdersByUser({id:1})
        
        console.log('getOrdersByUser',userOrders )//cehck

        console.log('mmmmmmmmmm')
        const userCart = await getCartByUser({id:1})
        console.log('getCartByUser',userOrders )
        
        const createdOrder = await createOrder('created', 1)





        console.log('done')
    }catch(error){
        throw error
    }


}
const testUsers = async () => {

    try {
        console.log('mango')
        
        const thePeople = await getAllUsers();
        console.log(thePeople, "gangang")
    }catch(error){
        throw error
    }
}

const MangoId = async () => {
    
    try {
        console.log("travisScott")

        const kylie = await getUserById(2);
        console.log(kylie, "shoesb")
      
    }catch(error){
        throw error
    }
  }

  const tea = async () => {
      
    

    try{
        console.log("creating user")

        const user = await createUser({
            firstName:'backpack',
            lastName:'backpack',
            username:'backpop',
            password:'dankboHy12hj3',
            email:'backpop@gmail.com'
        })

        console.log(user)
        const milk = await getUserByUsername({username:"backpop"})
        console.log(milk, "gotMilkTea")
        
    }catch(error) {
        throw error
    }
   }

module.exports ={
    testOrders,
    testUsers,
    MangoId,
    tea
}
// testOrders()
// MangoId()
tea()

