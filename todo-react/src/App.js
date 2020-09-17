import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends Component {
  state = {
    newTodo: "Far...",
    todos: [
      { id: 123, title: "Pain", completed: false },
      { id: 234, title: "Lait", completed: true },
      { id: 345, title: "Beurre", completed: false },
    ],
  };
  handleChange = (event) => {
    this.setState({
      newTodo: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, {
        id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        title: this.state.newTodo,
        completed: false,
      }],
      newTodo: "",
    });
  };
  render() {
    const { newTodo, todos } = this.state;
    return (
      <div className="App">
        <TodoForm newTodo={newTodo} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <TodoList items={todos} />
      </div>
    );
  }
}

export default App;
