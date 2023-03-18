const { Accessories} = require("../db");
const { Op } = require("sequelize");

//!! GET de accessories

const getAllAccessories = async (req,res) => {
    try {
        const allAccessories = await Accessories.findAll({
            attributes: [
                "accessoriesID",
                "name",
                "type",
                "img",
                "sizes",
                "description",
                "price",
            ]
        })
        res.status(200).json(allAccessories)
    } catch (err) {
        res.status(404).json(err.message)
    }
}

module.exports = {
    getAllAccessories,
  };
  