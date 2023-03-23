const { Products} = require("../db");
const { Op } = require("sequelize");

 const searchProducts = async (req, res) => {
    
  
    try {
      const { name } = req.query;
   
  
      const products = await Products.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  module.exports = {searchProducts}