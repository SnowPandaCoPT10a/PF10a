const {Router} = require('express');
const {getAllTshirts} = require('../controllers/tShirtsControllers');

const router = Router();

router.get('/', getAllTshirts);
// router.get('/:id', getAccessoriesById);

// router.post('/create', postNewAccessories);
// router.put('/disable/:accessoriesID',disableAccessorie)
// router.put('/modify/:accessoriesID',modifyAccessories)

// router.delete('/delete/:accessoriesID', deleteAccessories)

module.exports = router;
