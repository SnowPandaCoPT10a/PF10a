const { Users } = require('../db');
const { Op } = require("sequelize");
//const { onlyLettersCheck, onlyDateCheck, onlyNumbersCheck, isEmailCheck, httpsLinkCheck, statusCheck, priviligeCheck } = require('../helpfuls/regex');
//const cloudinary = require('cloudinary').v2;




//! GET show all users Users --------------

async function getAllUsers(req, res, next) {
    try {
        const allUser = await Users.findAll({});
        return res.status(200).send(allUser)
    } catch (err) {
        next(err);
    };
};

//! POST New User --------------
async function postNewUser(req, res) {
    try {
        //let { first_name, last_name, nationality, genre, date_birth, type_doc, identification_doc, email, mobile, image, status, privilige } = req.body;
        

        let { email } = req.body;
        if (!isEmailCheck(email)) {
            return res.status(412).send({ message: "information required" });
        }
        let ceateUser = await Users.findOrCreate({  email });
        return res.status(201).send({ message: "User was created" });
    } catch (err) {
        res.status(500).json({ err: err });
    };
}
 



//!! ----------------
module.exports = {
    getAllUsers,
    postNewUser,
    
};