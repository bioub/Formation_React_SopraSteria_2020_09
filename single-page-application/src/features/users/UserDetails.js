import React from "react";
import { useSelector } from "react-redux";
import { usersItemByIdSelector } from "./selectors";

function UserDetails({match}) {
  const user = useSelector(usersItemByIdSelector(match.params.userId));

  return (
    <div className="UserDetails">
      User details for id {match.params.userId}
      <p>Name : {user && user.name}</p>
      <p>Email : {user?.email}</p>
      <p>Phone : {user?.phone}</p>
    </div>
  );
}


export default UserDetails;