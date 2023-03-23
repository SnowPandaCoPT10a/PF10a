const {Router} = require('express');
const {getAllProducts,getProductsByCategory,getProductsByBrand,getProductsById,postNewProducts,featuredProducts,deleteProducts,modifyProducts,disableProducts} = require('../controllers/productsControllers');

const router = Router();

router.get('/', getAllProducts)
router.get('/category/:access', getProductsByCategory);
router.get('/brand/:access', getProductsByBrand);

router.get('/:id', getProductsById);



router.post('/create', postNewProducts);

router.put('/disable/:productsID',disableProducts)
router.put('/featured/:productsID',featuredProducts)
router.put('/modify/:productsID',modifyProducts)

router.delete('/delete/:productsID', deleteProducts)



module.exports = router;