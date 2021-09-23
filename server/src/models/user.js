"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ///Un usuario pertenece a un rol
      User.belongsTo(models.Roles, {
        foreignKey: "role_id",
      });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: DataTypes.STRING,
      user: DataTypes.STRING,
      
    },
    {
      sequelize,
      modelName: "Users",
    }
  );

  return User;
};
