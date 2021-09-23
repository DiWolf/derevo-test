import React from "react";
import { useEffect } from "react";
//Esto lo vamos a utilizar para probar
import { useDispatch, useSelector } from "react-redux";
import { obtenerUsuarios } from "../../../actions/user.actions";

const UserRole = ({ setUserId }) => {
  //lo vamos a mover a un componente
  const { Users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  //Obtener los usuarios del sistema
  useEffect(() => {
    dispatch(obtenerUsuarios());
  }, [dispatch]);

  if (Users.length === 0) {
    return <h1>cargando</h1>;
  }

  const ObtenerPerfil = (e) => {
    // return <ProfileUser id={e} />;
    setUserId(e);
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Lista de usuario del sistema</h5>
        <table className="table">
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Usuario</td>
              <td>Rol</td>
              <td>Acciones</td>
            </tr>
          </thead>
          <tbody>
            {Users.map((data) => (
              <>
                <tr>
                  <td>{data.nombre}</td>
                  <td>{data.user}</td>
                  <td>{data.Role.rol}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        ObtenerPerfil(data.id);
                      }}
                    >
                      Información
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserRole;
