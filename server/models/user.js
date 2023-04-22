"use strict";
const { encrypt } = require("../helpers/bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasOne(models.umkm);
    }
  }
  user.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Username Shouldn't Empty",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Password Shouldn't Empty",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Email Shouldn't Empty",
          },
        },
      },
      role: { type: DataTypes.STRING },
    },
    {
      hooks: {
        beforeCreate: function (user, options) {
          user.password = encrypt(user.password);
          user.role = "user";
        },
        beforeUpdate: function (user, options) {
          user.password = encrypt(user.password);
        },
      },
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
