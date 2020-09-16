import React, { Component } from "react";

class Todolist extends Component {
  state = {
    todos: ["Pain", "Lait", "Beurre"],
    newTodo: "",
  };

  // handleDelete = (event) => {
  //   console.log(event.target.innerText);
  // }
  handleDelete = (todo) => {
    // créé un nouveau tableau
    // changement immuable
    this.setState({
      todos: this.state.todos.filter((t) => t !== todo),
    });
  };
  handleChange = (event) => {
    this.setState({
      newTodo: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    // met à jour le tableau existant
    // changement muable
    // this.state.todos.push(this.state.newTodo);
    // this.forceUpdate();

    // créé un nouveau tableau
    // changement immuable
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: "",
    });
  };
  render() {
    const items = this.state.todos.map((todo) => (
      <div key={todo} className="TodoItem">
        {todo}
        <button onClick={() => this.handleDelete(todo)}>-</button>
      </div>
    ));
    return (
      <div className="TodoList">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newTodo} onChange={this.handleChange} />
          <button>+</button>
        </form>
        <div className="TodoItems">{items}</div>
      </div>
    );
  }
}

/*
Exercice 1 :
Afficher autant de <div className="TodoItem">A</div>
qu'il y a de valeur dans le tableau du state

Exercice 2 :
En s'inspirant de UserForm
Créer une clé newTodo dans le state qui stocke la valeur du formulaire

Exercice 3 :
Au submit du formulaire ajouter newTodo dans le tableau todos
*/

export default Todolist;
