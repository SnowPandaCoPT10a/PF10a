const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    marca: {
      type: DataTypes.STRING
    },
    modelo: {
      type: DataTypes.STRING
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT
    },
    imagen: {
      type: DataTypes.STRING
    }

  });
};
