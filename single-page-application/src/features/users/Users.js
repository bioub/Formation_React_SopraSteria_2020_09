import React from "react";
import UserDetails from "./UserDetails";
import UsersList from "./UsersList";
import { Route, Switch } from "react-router-dom";
import UserForm from "./UserForm";

function Users() {
  return (
    <div className="Users">
      <UsersList />
      <Switch>
        <Route path="/users/create" component={UserForm}></Route>
        <Route path="/users/:userId" component={UserDetails}></Route>
      </Switch>
    </div>
  );
}


export default Users;