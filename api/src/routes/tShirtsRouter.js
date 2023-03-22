const {Router} = require('express');
const {getAllTshirts,getTshirtsById,postNewTshirts,disableTshirts,deleteTshirts,modifyTshirts,} = require('../controllers/tShirtsControllers');

const router = Router();

router.get('/', getAllTshirts);
router.get('/:id', getTshirtsById);

router.post('/create', postNewTshirts);
router.put('/disable/:tshirtsID',disableTshirts)
router.put('/modify/:tshirtsID',modifyTshirts)
router.delete('/delete/:tshirtsID', deleteTshirts)

module.exports = router;
