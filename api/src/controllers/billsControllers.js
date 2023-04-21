const { Bills, Users } = require("../db");
const nodemailer = require("nodemailer");

const { Op } = require("sequelize");
require("dotenv").config();
const mercadopago = require("mercadopago");
const {
  ACCESS_TOKEN,
} = process.env;

//  Agrega credenciales
mercadopago.configure({
  access_token: ACCESS_TOKEN,
});


//!POST purchase
const postNewBills = async (req, res) => {
  let { item, quantity, date, price , image, product_ID,category_name, idUser} = req.body;
  console.log(req.body)
 
    try {
     //const user = await Users.findByPk(idUser); 
      let bill = {
        item,
        quantity,
        date,
        price,
        image,
        product_ID,
        category_name,
        userIdUser: idUser
      }
      let newbill = await Bills.create(bill);
      //res.status(200).json(createdBill);
      let preference = {
        items: [
          {
            id: newbill.id,
            title: newbill.item.join(", "),
            quantity: 1,
            unit_price: newbill.price,
            description: "SnowPanda",
            currency_id: "ARS",
          },
        ],
        back_urls: {
          success: "https://pf-10a-bhm9.vercel.app/",
          failure: "https://pf-10a-bhm9.vercel.app/",
          pending: "https://pf-10a-bhm9.vercel.app/",
        },
        auto_return: "approved",
        binary_mode: true,
        notification_url:
         "https://pf10a-production.up.railway.app/bills/payment/notification",
        //"https://a3a3-37-178-222-102.eu.ngrok.io/bills/payment/notification",
      };
      mercadopago.preferences
        .create(preference)
        .then(function (response) {
          res.status(201).send(response.body.init_point);
        })
        .catch(function (error) {
          res.status(500).json({ error: error });
          console.log(error)
        });
    } catch (error) {
      console.log(error)
     // res.status(404).json("Your Purchase was not created");
      
    }
  }

  async function paymentNotification(req, res) {
    const { query } = req;
    const { email } = req.body;
    const topic = query.topic || query.type;
  
    switch (topic) {
      case "payment":
        const paymentId = query.id || query["data.id"];
        const payment = await mercadopago.payment.findById(paymentId);
        const idS = payment.body.additional_info.items.map((e) => e.id);
  
        Bills.update(
          {
            payment_status: payment.body.status,
            date_approved: payment.body.date_approved,
            id_payment: payment.body.id,
            authorization_code: payment.body.authorization_code,
            mp_id_order: payment.body.order.id,
            fee_mp: payment.body.fee_details[0].amount,
            active: true,
          },
          {
            where: { id: idS },
          }
        )
          .then((numRowsAffected) => {
            console.log("Registros actualizados:", numRowsAffected);
  
            // Configura el transporter de nodemailer
            const transporter = nodemailer.createTransport({
              host: "smtp.gmail.com",
              port: 587,
              secure: false,
              auth: {
                user: "snowpanda2023@gmail.com",
                pass: "uauhznxdznkfcadl",
              },
            });
  
            // Configura el mensaje de correo electrónico
            const message = {
              from: "snowpanda2023@gmail.com",
              to: email,
              subject: "Detalle de la compra",
              text: "Aquí está el detalle de la compra: " + JSON.stringify(payment.body.additional_info.items),
            };
  
            // Envía el correo electrónico
            transporter.sendMail(message, (error, info) => {
              if (error) {
                console.log("Error al enviar el correo electrónico:", error);
              } else {
                console.log("Correo electrónico enviado exitosamente:", info.response);
              }
            });
          })
          .catch((err) => {
            console.error("Error al actualizar registros:", err);
          });
        break;
      default:
        console.log("Tipo de notificación no reconocido:", topic);
    }
  
    res.send();
  }

//  Agrega credenciales
mercadopago.configure({
  access_token: ACCESS_TOKEN,
});
//!--------------

//!GET purchase
//https://pf10a-production.up.railway.app/bills
const getAllBills = async (req, res) => {
  try {
    const allBills = await Bills.findAll({include: Users})
    res.status(200).send(allBills);
  } catch (e) {
    res.status(404).json(e);
  }
};

//!! Desactiva Bills
// De esta manera, cuando un administrador desactiva una factura, 
//se cambia el valor de la columna active a false en lugar 
//de borrar la factura de la base de datos.
const desactivaBill = async (req, res) => {
  const { id } = req.params;
  try {
    const bill = await Bills.findOne({ where: { id } });
    if (!bill) {
      return res.status(404).json({ message: 'Bill not found' });
    }
    let active = bill.active
    if(active === true){
    await bill.update({ active: false });
    console.log(`Update the bills id: ${id} `);
    }
    if(active === false ){
      await bill.update({ active: true });
    console.log(`Update the bills id: ${id} `);
    }
    return res.status(204).json({ message: `Update the bills ${id} `});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//!!
const searchBills = async (req, res) => {
  try {
    const { email, status, id_payment } = req.query;
    let where = {};
    if (email) {
      where = {
        ...where,
        '$user.email$': {
          [Op.iLike]: `%${email}%`,
        },
      };
    }
    if (status) {
      where = {
        ...where,
        payment_status: status,
      };
    }
    if (id_payment) {
      where = {
        ...where,
        id_payment,
      };
    }
    const bills = await Bills.findAll({
      where,
      include: {
        model: Users,
        as: 'user',
        attributes: ['email', 'first_name', 'last_name'],
      },
    });
    res.json({ bills });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//!!!

module.exports = {
  postNewBills,
  getAllBills,
  paymentNotification,
  desactivaBill,
  searchBills
};