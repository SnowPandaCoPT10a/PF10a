const {Router} = require('express');
const {getAllAccessories,getAccessoriesById,postNewAccessories,deleteAccessories,modifyAccessories,disableAccessorie} = require('../controllers/accessoriesControlles');

const router = Router();

router.get('/:access', getAllAccessories);
// router.get('/:id', getAccessoriesById);

// router.post('/create', postNewAccessories);
// router.put('/disable/:accessoriesID',disableAccessorie)
// router.put('/modify/:accessoriesID',modifyAccessories)

// router.delete('/delete/:accessoriesID', deleteAccessories)

module.exports = router;