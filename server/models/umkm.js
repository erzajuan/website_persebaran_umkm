"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class umkm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      umkm.belongsTo(models.user);
      umkm.hasMany(models.menu);
    }
  }
  umkm.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name Shouldn't Empty",
          },
        },
      },
      location: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Location Shouldn't Empty",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Description Shouldn't Empty",
          },
        },
      },
      openDays: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Open Days Shouldn't Empty",
          },
        },
      },
      openTime: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Open Time Shouldn't Empty",
          },
        },
      },
      map: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Map Shouldn't Empty",
          },
        },
      },
      status: DataTypes.STRING,
      image: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "User ID Shouldn't Empty",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: function (umkm, options) {
          umkm.status = "pending"
        },
      },
      sequelize,
      modelName: "umkm",
    }
  );
  return umkm;
};
