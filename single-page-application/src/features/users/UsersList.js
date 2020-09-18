import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { usersFetchSuccess } from "./actions";
import { fetchUsers } from "./api";
import { usersItemsSelector } from "./selectors";

function UsersList() {
  const users = useSelector(usersItemsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers().then((users) => dispatch(usersFetchSuccess(users)));

    // TODO redux-thunk
    // dispatch(usersFetchRequested());
  }, []);

  return (
    <div className="UsersList">
      <Link to="/users/create">Ajouter</Link>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={"/users/" + user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
