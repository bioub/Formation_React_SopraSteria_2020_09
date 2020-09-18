import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Todos from "./features/todos/Todos";
import { Route, Link } from "react-router-dom";
import Hello from "./features/hello/Hello";
import Users from "./features/users/Users";
import Home from "./features/home/Home";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/users">Users</Link>{' '}
        <Link to="/hello/Romain">Hello</Link>{' '}
        <Link to="/todos">Todos</Link>{' '}
        <Link to="/counter">Counter</Link>
      </nav>
        <Route path="/" component={Home} exact={true}></Route>
        <Route path="/users" component={Users}></Route>
        <Route path="/hello/:name" component={Hello}></Route>
        <Route path="/todos">
          <Todos />
        </Route>
        <Route path="/counter" component={Counter}></Route>
    </div>
  );
}

export default App;
