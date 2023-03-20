const { Accessories} = require("../db");
const { Op } = require("sequelize");

//!! GET de accessories

const getAllAccessories = async (req,res) => {
    try {
        const allAccessories = await Accessories.findAll({
            // attributes: [
            //     "accessoriesID",
            //     "name",
            //     "type",
            //     "img",
            //     "sizes",
            //     "description",
            //     "price",
            // ]
        })
        res.status(200).json(allAccessories)
    } catch (err) {
        res.status(404).json(err.message)
    }
}


//!! GET : ID

const getAccessoriesById = async (req,res) => {
    const {id} = req.params;
    
    try{
        const accessories = await Accessories.findOne({
            where: {accessoriesID:id,
            },
        })
        (accessories === null)?res.status(404).json("Accessories not found"):res.status(200).json(accessories)
        
    }catch(err){
        res.status(404).json("Accessories not found")
}
}

//!! POST 

const postNewAccessories = async (req,res) => {
    let{
        
        name,
        type,
        img,
        sizes,
        description,
        price,
        
    }= req.body;

    try {
        await Accessories.findOrCreate({ 
            where: { name },
            defaults: {
            type,
            img,
            sizes,
            description,
            price,
            },

        }) 
        res.status(200).json("Accessories created")
        
    } catch (error) {
        console.log(error)
    }
}

//!! DELETE

//!! PUT









//! ..................
module.exports = {
    getAllAccessories,
    getAccessoriesById,
    postNewAccessories
  };
  