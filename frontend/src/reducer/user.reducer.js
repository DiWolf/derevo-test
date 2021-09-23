import { types } from "../types/types";

const initialState = {
  Users: [],
  RolesPermisos: [],
  PerfilUsuario: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OBTENER_USUARIOS_DEL_SISTEMA:
      return {
        ...state,
        Users: action.payload,
      };
    case types.OBTENER_ROLES_PERMISOS:
      return {
        ...state,
        RolesPermisos: action.payload,
      };
    case types.OBTENER_PERFIL_USUARIO:
      return {
        ...state,
        PerfilUsuario: action.payload,
      };
    default:
      return state;
  }
};
