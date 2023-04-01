const {Router} = require('express');
const {getAllUsers,postNewUser} = require('../controllers/usersControllers');

const router = Router();

router.get('/', getAllUsers)
// router.get('/category/:access', getProductsByCategory);
// router.get('/brand/:access', getProductsByBrand);
// router.get('/:id', getProductsById);

router.post('/create', postNewUser);

// router.put('/disable/:productsID',disableProducts)
// router.put('/featured/:productsID',featuredProducts)
// router.put('/modify/:productsID',modifyProducts)

// router.delete('/delete/:productsID', deleteProducts)



module.exports = router;