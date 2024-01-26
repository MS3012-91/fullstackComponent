"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pet.belongsToMany(models.Characteristic, {
        through: "PetsCharacteristics",
      });
    }
  }
  Pet.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      breed: {
        type: DataTypes.STRING,
        defaultValue: "Unpedigreed",
      },
      color: {
        type: DataTypes.STRING,
      },
      weight: {
        type: DataTypes.FLOAT,
      },
      gender: {
        type: DataTypes.ENUM,
        values: ["male", "female"],
      },
      birthday: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Pet",
      underscored: true,
    }
  );
  return Pet;
};
