"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      menu.belongsTo(models.umkm);
    }
  }
  menu.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name Shouldn't Empty",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Price Shouldn't Empty",
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        defaultValue: "https://via.placeholder.com/150",
      },
      umkmId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "UMKM ID Shouldn't Empty",
          },
        },
      },
    },
    {
      hooks: {
        beforeUpdate: function (menu, options) {
          menu.image = "https://via.placeholder.com/150";
        },
      },
      sequelize,
      modelName: "menu",
    }
  );
  return menu;
};
