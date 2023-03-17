const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("jackets", {
    jacketsID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sizes: {
      type: DataTypes.JSON,
    },
    img: {
      type: DataTypes.STRING,
    },
    material: {
      type: DataTypes.STRING,
    },
    activity: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    featuredProduct: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
