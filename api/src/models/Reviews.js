const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "reviews",
    {
      idReviews: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName:{
        type: DataTypes.STRING,
        allowNull:false
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: "fecha",
      updatedAt: false,
    }
  );
};