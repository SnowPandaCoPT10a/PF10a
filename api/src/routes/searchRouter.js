const {Router} = require('express');
const {searchProducts}= require("../controllers/searchControllers")
const router = Router();

router.get('/', searchProducts)

module.exports = router;