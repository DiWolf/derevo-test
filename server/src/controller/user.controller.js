let _userService = null;
class UserController {
  constructor({ UserService }) {
    _userService = UserService;
  }

  //Obtener la información del usuario
  async GetAllUser(req, res) {
    const data = await _userService.GetAllUser();
    return res.status(200).send(data);
  }

  async GetUserRolebyId(req, res) {
    const { id } = req.params;
    const data = await _userService.GetUserRolebyId(id);
    return res.status(200).send(data);
  }

  async GetRoleUserPermissions(req, res) {
    const { id } = req.params;
    const data = await _userService.GetRoleUserPermissions(id);
    return res.status(200).send(data);
  }

  async GetPermissionsbyRole(req, res) {
    const data = await _userService.GetPermissionsbyRole();
    return res.status(200).send(data);
  }
}

module.exports = UserController;
