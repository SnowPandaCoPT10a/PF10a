const { 
    Accessories,
    Boards,
    Boots,
    Favorites,
    Jackets,
    Pants,
    Reviews,
    TShirts,
    Users,
   } = require('../db')


   const loadAccessories = require('../data/accessories.json');
  
   const loadBoards = require('../data/boards.json');
   const loadBoots = require('../data/boots.json');
   const loadFavorites = require('../data/favorites.json');
   const loadJackets = require('../data/jackets.json');
   const loadPants = require('../data/pants.json');
   const loadReviews = require('../data/reviews.json');
   const loadTShirts = require('../data/tShirts.json');
   const loadUsers = require('../data/users.json');
   
   
   async function loadAllModelsInDB(){
    try{
      const emptyBoards = await Boards.findAll({});
      if(!emptyBoards){
        await Boards.bulkCreate(loadBoards);
      console.log('Hotels loaded ok to DB')
      }
      await Accessories.bulkCreate(loadAccessories);
      console.log('Accessories loaded ok to DB')
      await Favorites.bulkCreate(loadFavorites);
      console.log('Favorites loaded ok to DB')
      await Users.bulkCreate(loadUsers);
      console.log('Users loaded ok to DB')
      await Jackets.bulkCreate(loadJackets);
      console.log('Jackets loaded ok to DB')
      await Pants.bulkCreate(loadPants);
      console.log('Pants loaded ok to DB');
      await Boots.bulkCreate(loadBoots);
      console.log('Pants loaded ok to DB');
      await Reviews.bulkCreate(loadReviews);
      console.log('Pants loaded ok to DB');
      await TShirts.bulkCreate(loadTShirts);
      console.log('Pants loaded ok to DB');
  
    } catch(error){
      console.log(error);
    }
    
  
  }
  
  module.exports = {
      loadAllModelsInDB
    }
  