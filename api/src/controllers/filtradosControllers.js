const { Products} = require("../db");
const { Op } = require("sequelize");


//GET FILTRADOS 
//http://localhost:3001/filtrado?category=accessories&brand=SnowPandaCo&minPrice=50&maxPrice=100
const filtradoProducts = async (req,res)=>{
    const {category,brand,minPrice, maxPrice}= req.query
    try {
        let product = await Products.findAll({})
        if(category){
            product = product.filter(products => products.category === category)
        }
        if(brand){
            product = product.filter(products => products.brand === brand)
            
        }
        if(minPrice && maxPrice){
            product = product.filter(products => products.price >= Number(minPrice) && products.price <= Number(maxPrice))
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error.message)
        
    }
}
module.exports = {filtradoProducts}