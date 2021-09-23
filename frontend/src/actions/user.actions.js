import crmApi from "../config/axios.config";
import { types } from "../types/types";

//Obtener listado de usuarios
export const obtenerUsuarios = () => {
  return async (dispatch) => {
    try {
      await crmApi
        .get(`user/`, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          dispatch(obtenerUsuariosExito(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
};

//Obtener roles y permisos.
export const obtenerRolesPermisos = () => {
  return async (dispatch) => {
    try {
      await crmApi
        .get(`user/role/permissionByRole`, {
          headers: {
            "cotent-type": "application/json",
          },
        })
        .then((response) => {
          dispatch(setRolesyPermisos(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
};

//Obtener perfil usuario .
export const obtenerPerfilUsuario = (id) => {
  return async (dispatch) => {
    try {
      await crmApi
        .get(`user/${id}/roleUserPermisions`, {
          headers: {
            "cotent-type": "application/json",
          },
        })
        .then((response) => {
          dispatch(setProfileUser(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
};

//Dispatch
const obtenerUsuariosExito = (usuarios) => ({
  type: types.OBTENER_USUARIOS_DEL_SISTEMA,
  payload: usuarios,
});

const setRolesyPermisos = (rolespermisos) => ({
  type: types.OBTENER_ROLES_PERMISOS,
  payload: rolespermisos,
});

const setProfileUser = (profile) => ({
  type: types.OBTENER_PERFIL_USUARIO,
  payload: profile,
});
