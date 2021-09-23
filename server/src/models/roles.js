"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Un rol puede tener un usuario
      Roles.hasOne(models.Users, { foreignKey: "role_id" });
      //Pero un rol puede tener uno o varios permisos
      Roles.hasMany(models.Permisos, { foreignKey: "role_id" });
    }
  }

  Roles.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      rol: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Roles",
    }
  );

  return Roles;
};
