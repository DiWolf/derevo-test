import React from "react";
import { useEffect } from "react";
//Esto lo vamos a utilizar para probar
import { useDispatch, useSelector } from "react-redux";
import { obtenerRolesPermisos } from "../../../actions/user.actions";
const RolesPermisos = () => {
  //lo vamos a mover a un componente
  const { RolesPermisos } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  //Obtener los usuarios del sistema
  useEffect(() => {
    dispatch(obtenerRolesPermisos());
  }, [dispatch]);

  //validamos que tengamos datos en el array
  if (RolesPermisos.length === 0) {
    return <h1>Cargando información... </h1>;
  }
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Lista de Roles y permisos</h5>

        <table className="table">
          <thead>
            <tr>
              <td>Rol</td>
              <td>Permisos</td>
            </tr>
          </thead>
          <tbody>
            {RolesPermisos.map((data) => (
              <>
                <tr>
                  <td>{data.rol}</td>
                  <td>
                    {data.Permisos.length > 0 ? (
                      data.Permisos.map((p) => (
                        <>
                          <p>{p.permiso}</p>
                        </>
                      ))
                    ) : (
                      <p>Este rol no cuenta con permisos</p>
                    )}
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

export default RolesPermisos;
