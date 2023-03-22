require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,DB
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/snowpanda`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => {
  if (typeof model === 'function') {
    model(sequelize);
  }
});
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { 
  Accessories,
  Bills,
  Boards,
  Boots,
  Favorites,
  Jackets,
  Pants,
  Reviews,
  Tshirts,
  Users,
 } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

//La tabla "Accessories" podría estar relacionada con la tabla "Users" 
//mediante una relación de muchos a muchos, donde los usuarios pueden 
//tener muchos accesorios y cada accesorio puede ser utilizado por muchos usuarios. 

// Relación de muchos a muchos entre Users y Accessories
Users.belongsToMany(Accessories,{through: "UserAccesory"})
Accessories.belongsToMany(Users, {through: "UserAccesory"})

// Relación de muchos a muchos entre Users y Boards
Users.belongsToMany(Boards,{through: "UserBoard"})
Boards.belongsToMany(Users, {through: "UserBoard"})

// Relación de muchos a muchos entre Users y Boots
Users.belongsToMany(Boots,{through: "UserBoot"})
Boots.belongsToMany(Users, {through: "UserBoot"})

// Relación de muchos a muchos entre Users y Jackets
Users.belongsToMany(Jackets,{through: "UserJacket"})
Jackets.belongsToMany(Users, {through: "UserJacket"})


// Relación de muchos a muchos entre Users y Pants
Users.belongsToMany(Pants,{through: "UserPant"})
Pants.belongsToMany(Users, {through: "UserPant"})

// Relación de muchos a muchos entre Users y Tshirts
Users.belongsToMany(Tshirts,{through: "UserTshirt"})
Tshirts.belongsToMany(Users, {through: "UserTshirt"})

// Relación de uno a muchos entre Users y Bills
Users.hasMany(Bills)
Bills.belongsTo(Users)

// Relación de uno a muchos entre Users y Reviews
Users.hasMany(Reviews)
Reviews.belongsTo(Users)

// Relación de muchos a muchos entre Users y Favorites
Users.belongsToMany(Favorites, { through: 'UserFavorite' });
Favorites.belongsToMany(Users, { through: 'UserFavorite' });






module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
 