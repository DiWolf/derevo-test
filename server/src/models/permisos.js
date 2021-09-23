"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Permisos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Un permiso pertenece a un rol
      Permisos.belongsTo(models.Roles, { foreignKey: "role_id" });
    }
  }

  Permisos.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      permiso: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Permisos",
    }
  );

  return Permisos;
};
