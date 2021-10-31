const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();
const {createProduct} = require("../db")

const brands = ["jordan", "nike", "adidas", "crocs", "gucci", "louisvuitton"]

// brands.forEach( async (brand, idx) => {
//     console.log("----", brand, "----")
//     await sneaks.getProducts(brand, 50, function(err, products){


//         products.forEach((product, idx) => {
    
//             // let brand = (product.brand)
//             console.log(idx, product.shoeName)
//             console.log(product.brand)
//             console.log(product.thumbnail)
//             console.log(product.releaseDate)
//             console.log(product.description)
//             // (product.brand)(brand)
    
    
//             // await makeProduct({brand, shoeName, brand, thumbnail, releaseDate, description}) 
//             })
//         })
// }) 

const newProducts = async () => {
    try {
        await brands.forEach( async (brand, idx) => {
            try {
                console.log("----", brand, "----")
                await sneaks.getProducts(brand, 200 , async function(err, products){
                    try {
                        await products.forEach( async (product, idx) => {

                            try{

                                // if (!product.brand || !product.colorway || !product.shoeName || !product.retailPrice || !product.releaseDate || !product.inStock || !product.thumbnail ){
                                //     throw Error('You did not buy enough shib stupid')
                                //   }
                                // //  let brand = (product.brand)

                                // || !product.inventory 
                            
                            // (product.brand)(brand)
                            // const resellPriceArr = Object.values(product.lowestResellPrice) 
                            // let count = 0 
                            // let sum = 0 
                            // resellPriceArr.forEach((price) => {
                            //     sum += price 
                            //     count ++
                            // })
                            // const resellPrice = sum / count
            // createProduct({inventory: 5, brand: 'Nike', colorway: 'blue', shoeName: 'Air', retailPrice: 50, inStock: true, 
            // releaseDate: '2004-03-04', thumbnail: "image", resellPrice: 30});
            
                            const inventory = 5 
                            const brand = product.brand
                            const colorway = product.colorway
                            const shoeName = product.shoeName
                            const retailPrice = product.retailPrice
                            const inStock = true
                            const releaseDate = product.releaseDate
                            const thumbnail = product.thumbnail
                            const resellPrice = product.retailPrice * 1.5
                            console.log(inventory, brand, colorway, shoeName, releaseDate, retailPrice, inStock, thumbnail, resellPrice
                                )
                            await createProduct({
                                inventory, brand, colorway, shoeName, releaseDate, retailPrice, inStock, thumbnail, resellPrice
                            
                            })
            
            
                            }catch(error) {
                                console.error(error)
                            }
                
                           
                            })
                    }catch(error) {
                        console.error(error)
                    }
            
                   
                    })
            }catch(error) {
                console.error(error)
            }
            }
            ) 
    
    } catch(error) {
        console.error(error)
    }
    }
    

module.exports = { newProducts }