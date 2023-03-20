const {Router} = require('express');
const {getAllAccessories,getAccessoriesById,postNewAccessories} = require('../controllers/accessoriesControlles');

const router = Router();

router.get('/', getAllAccessories);
router.get('/:id', getAccessoriesById);

router.post('/create', postNewAccessories);

module.exports = router;