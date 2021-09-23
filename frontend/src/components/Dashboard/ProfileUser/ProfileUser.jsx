import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerPerfilUsuario } from "../../../actions/user.actions";
const ProfileUser = ({ id }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Detalles del usuario</h5>
        {id === null ? <p>Click en información</p> : <Detalles id={id} />}
      </div>
    </div>
  );
};

//Nota: Aquí puedo realizar la consulta directamente al state
//como fines de práctica y de la prueba dejé que la petición la haga al servidor
function Detalles({ id }) {
  const { PerfilUsuario } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerPerfilUsuario(id));
  }, [dispatch, id]);

  return (
    <>
      <h4>Usuario</h4>
      <ul>
        <li>Nombre: {PerfilUsuario.nombre} </li>
        <li>Usuario Login: {PerfilUsuario.user}</li>
        <li>Rol: {PerfilUsuario.Role?.rol}</li>
      </ul>
      <h4>Permisos</h4>
      <ul>
        {PerfilUsuario.Role?.Permisos.length > 0 ? (
          PerfilUsuario.Role?.Permisos.map((p) => (
            <>
              <li>{p.permiso}</li>
            </>
          ))
        ) : (
          <li>Este rol no cuenta con permisos</li>
        )}
      </ul>
    </>
  );
}

export default ProfileUser;
