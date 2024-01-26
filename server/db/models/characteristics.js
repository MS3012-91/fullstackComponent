"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Characteristic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Characteristic.belongsToMany(models.Pet, {
        through: "PetsCharacteristics"
      });
    }
  }
  Characteristic.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Characteristic",
      underscored: true,
    }
  );
  return Characteristic;
};
