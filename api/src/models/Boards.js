const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("boards", {
    boardID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    img: {
      type: DataTypes.STRING,
    },
    activity: {
      type: DataTypes.JSON,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    featuredProduct: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  });
};
