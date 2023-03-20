const { Router } = require('express');
const cors = require("cors");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllAccessories = require("./accesoriesRouter");
const getAllBills = require("./billsRouter");
const getAllBoards = require("./boardsRouter");
const getAllBoots = require("./bootsRouter");
const getAllJackets = require("./jacketsRouter");
const getAllPants = require("./pantsRouter");
const getAllReviews = require("./reviewsRouter");
const getAlltShirts = require("./tShirtsRouter");
const getAllUsers = require("./usersRouter");

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.use('/boards', getAllBoards);
router.use('/accessories', getAllAccessories);
// router.use('/bills', getAllBills);
// router.use('/boots', getAllBoots);
// router.use('/jackets', getAllJackets);
// router.use('/pants', getAllPants);
// router.use('/reviews', getAllReviews);
// router.use('/tShirts', getAlltShirts);
// router.use('/users', getAllUsers);

router.get("/", (req, res, next) => {
    return res.status(200).json(getAllBoards);
  });

module.exports = router;
