const { Router } = require("express");

module.exports = function ({ UserController }) {
  const router = Router();

  //Obtener todos los usuarios del sistema
  router.get("/", UserController.GetAllUser);
  //Obtener el usuario con su rol
  router.get("/:id", UserController.GetUserRolebyId);
  //Obtener el usuario con rol y permisos
  router.get("/:id/roleUserPermisions", UserController.GetRoleUserPermissions);
  //Obtener solo los permisos que pertenecen al rol
  router.get("/role/permissionByRole", UserController.GetPermissionsbyRole);
  return router;
};
