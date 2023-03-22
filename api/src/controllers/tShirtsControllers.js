const { Tshirts} = require("../db");
const { Op } = require("sequelize");

//!! GET de Tshirts

const getAllTshirts = async (req,res) => {
    try {
        const allTshirts = await Tshirts.findAll({})
        res.status(200).json(allTshirts)
    } catch (err) {
        res.status(404).json(err.message)
    }
}


//!! GET : ID
//esto es para cambiarle el status de 
const getTshirtsById = async (req,res) => {
    const {id} = req.params;
    
    try{
        const tshirts = await Tshirts.findOne({
            where: {tshirtsID:id,
            },
        })
        res.status(200).json(tshirts)      
    }catch(err){
        res.status(404).json("Accessories not found", err)
}
} 

//!! POST 

const postNewTshirts = async (req,res) => {
    let{
        
        name,
        sizes,
        img,
        description,
        price,
        activity,
        material,
        
    }= req.body;

    try {
        await Tshirts.findOrCreate({ 
            where: { name },
            defaults: {
            img,
            sizes,
            description,
            price,
            activity,
            material,
            },

        }) 
        res.status(200).json("Tshirts created")
        
    } catch (error) {
        console.log(error)
    }
}



//!! MODIFY STATUS 
async function disableTshirts(req, res) {
    try {
      let { tshirtsID } = req.params;
  
      const tshirts = await Tshirts.findOne({
        where: {
            tshirtsID: tshirtsID
        }
      });
  
      if (tshirts.status === true) {
        tshirts.update({ status: false });
      } else if (tshirts.status === false) {
        tshirts.update({ status: true });
      }
      res.status(201).json(tshirts);
    } catch (err) {
      res.status(401).json({ error: err });
    };
  };


//!! PUT
async function modifyTshirts(req, res) {
    try {
      let { tshirtsID } = req.params;
      let{ 
        name,
        sizes,
        img,
        description,
        price,
        activity,
        material,

    }= req.body;
      const Tshirt = await Tshirts.findOne({
        where: {
            tshirtsID: tshirtsID
        }
      });
  
      if (Tshirt) {
        Tshirt.update({
        name,
        img,
        sizes,
        description,
        price,
        activity,
        material,
        });
  
        res.status(201).json(Tshirt);
        
      } else {
        res.status(404).json({ msg: "Tshirts not found" });
        
      }
    } catch (err) {
      res.status(401).json({ error: err });
    };
  
  };


//!! DELETE

const deleteTshirts = async (req, res) => {
    try {
      let { tshirtsID } = req.params;
      Tshirts.destroy({
        where: {
            tshirtsID: tshirtsID
        }
      })
  
      res.status(201).json({ message: "Tshirts delete" });
    } catch (err) {
      res.status(401).json({ error: err });
    };
  };



  
//! ..................
module.exports = {
    getAllTshirts,
    getTshirtsById,
    postNewTshirts,
    disableTshirts,
    modifyTshirts,
    deleteTshirts,
  };
  