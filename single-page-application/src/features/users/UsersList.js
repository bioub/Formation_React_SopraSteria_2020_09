import React from "react";
import { Link } from "react-router-dom";

function UsersList() {
  return (
    <div className="UsersList">
      <Link to="/users/create">Ajouter</Link>
      <ul>
        <li>
          <Link to="/users/1">Jean</Link>
        </li>
        <li>
          <Link to="/users/2">Eric</Link>
        </li>
        <li>
          <Link to="/users/3">Romain</Link>
        </li>
      </ul>
    </div>
  );
}


export default UsersList;