const {Router} = require('express');
const {getAllAccessories} = require('../controllers/accessoriesControlles');

const router = Router();

router.get('/', getAllAccessories);


module.exports = router;