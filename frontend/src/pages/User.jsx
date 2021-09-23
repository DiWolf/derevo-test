import { useState } from "react";
import ProfileUser from "../components/Dashboard/ProfileUser/ProfileUser";
import RolesPermisos from "../components/Dashboard/RolesPermisos/RolesPermisos";
import UserRole from "../components/Dashboard/UserRole";

const User = () => {
  const [userId, setUserId] = useState(null);
  console.log(userId);
  return (
    <>
      <div className="row">
        <div className="col">
          <UserRole setUserId={setUserId} />
        </div>
        <div className="col">
          <RolesPermisos />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ProfileUser id={userId} />
        </div>
      </div>
    </>
  );
};

export default User;
