const { Accessories} = require("../db");
const { Op } = require("sequelize");

//!! GET de accessories

const getAllAccessories = async (req,res) => {
    try {
        const allAccessories = await Accessories.findAll({})
        res.status(200).json(allAccessories)
    } catch (err) {
        res.status(404).json(err.message)
    }
}


//!! GET : ID
//esto es para cambiarle el status de 
const getAccessoriesById = async (req,res) => {
    const {id} = req.params;
    
    try{
        const accessories = await Accessories.findOne({
            where: {accessoriesID:id,
            },
        })
        if(!accessories.length){res.status(404).json({msn:"Aguss"})}
        res.status(200).json(accessories)      
    }catch(err){
        res.status(404).json("Accessories not found", err)
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



//!! MODIFY STATUS 
async function disableAccessorie(req, res) {
    try {
      let { accessoriesID } = req.params;
  
      const accessories = await Accessories.findOne({
        where: {
            accessoriesID: accessoriesID
        }
      });
  
      if (accessories.status === true) {
        accessories.update({ status: false });
      } else if (accessories.status === false) {
        accessories.update({ status: true });
      }
      res.status(201).json(accessories);
    } catch (err) {
      res.status(401).json({ error: err });
    };
  };


//!! PUT
async function modifyAccessories(req, res) {
    try {
      let { accessoriesID } = req.params;
      let{ 
        name,
        type,
        img,
        sizes,
        description,
        price,

    }= req.body;
      const Access = await Accessories.findOne({
        where: {
            accessoriesID: accessoriesID
        }
      });
  
      if (Access) {
        Access.update({
        name,
        type,
        img,
        sizes,
        description,
        price,
        });
  
        res.status(201).json(Access);
        
      } else {
        res.status(404).json({ msg: "Accessorie not found" });
        
      }
    } catch (err) {
      res.status(401).json({ error: err });
    };
  
  };


//!! DELETE

const deleteAccessories = async (req, res) => {
    try {
      let { accessoriesID } = req.params;
      Accessories.destroy({
        where: {
            accessoriesID: accessoriesID
        }
      })
  
      res.status(201).json({ message: "Accessorie delete" });
    } catch (err) {
      res.status(401).json({ error: err });
    };
  };



  
//! ..................
module.exports = {
    getAllAccessories,
    getAccessoriesById,
    postNewAccessories,
    disableAccessorie,
    modifyAccessories,
    deleteAccessories,
  };
  