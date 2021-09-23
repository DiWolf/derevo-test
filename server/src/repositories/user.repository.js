const { Users, Roles, Permisos } = require("../models/index");

class UserRepository {
  //Get user information (auth)
  async GetAllUser() {
    try {
      //Retornamos usuarios
      return await Users.findAll({
        include: [{ model: Roles, include: [{ model: Permisos }] }],
      })
        .then((result) => {
          return result;
        })
        .catch((err) => {
          throw new Error(err);
        });
    } catch (error) {
      throw new Error(error);
    }
  }

  //Get role user
  async GetUserRolebyId(id) {
    try {
      const data = await Users.findByPk(id, {
        include: [{ model: Roles }],
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  //Get user Role and Permissions
  async GetRoleUserPermissions(id) {
    try {
      console.log(id);
      const data = await Users.findOne({
        where: { id },
        include: [{ model: Roles, include: Permisos }],
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  //Get permissions by role
  async GetPermissionsbyRole() {
    try {
      const data = await Roles.findAll({
        include: [{ model: Permisos }],
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserRepository;
