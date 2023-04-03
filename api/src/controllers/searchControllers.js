const { Products} = require("../db");
const { Op } = require("sequelize");

 const searchProducts = async (req, res) => {
    
try {
  let {name}  = req.query;
  
  const productsName = await Products.findAll({});

  // productsCategory = productsName.filter(product => product.category === categoria)
  // console.log(productsCategory.length, "PIKACHU");

  if (name){
    console.log(name, "KAKAROTO")
    let products = await productsName.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
console.log(products, "CACA VAV")
    // products.length ? 
    res.status(200).json(products) 
    // :
    // res.status(404).json("The product does not exist");
  
}}

catch (error) {
  console.error(error);
  res.status(404).json({ message: "Internal Server Error" });
}
};

  module.exports = {searchProducts}
