const {Router} = require('express');
const {filtradoProducts}= require("../controllers/filtradosControllers")
const router = Router();

router.get('/', filtradoProducts)

module.exports = router;