
const { Router } = require("express");
const {getAllUsers,postNewUser, DisableUser, ModifyUser, searchUsuario } = require('../controllers/usersControllers')

const router = Router();

router.get('/', getAllUsers);
router.post('/create', postNewUser)
router.put("/disable", DisableUser)
router.put("/modify/:email", ModifyUser)
router.get("/:email", searchUsuario)

 

module.exports = router;