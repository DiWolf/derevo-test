let _userRepository = null;

class UserService {
  constructor({ UserRepository }) {
    _userRepository = UserRepository;
  }

  //Método para ingresar al sistema
  async GetAllUser() {
    return await _userRepository.GetAllUser();
  }

  //Obtener el rol del usuario
  async GetUserRolebyId(id) {
    return await _userRepository.GetUserRolebyId(id);
  }

  //
  async GetRoleUserPermissions(id) {
    return await _userRepository.GetRoleUserPermissions(id);
  }

  async GetPermissionsbyRole() {
    return await _userRepository.GetPermissionsbyRole();
  }
}

module.exports = UserService;
