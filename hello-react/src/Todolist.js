import React, { Component } from "react";

class Todolist extends Component {
  state = {
    todos: ["Pain", "Lait", "Beurre"],
  };
  render() {
    return (
      <div className="TodoList">
        <form>
          <input />
          <button>+</button>
        </form>
        <div className="TodoItems">
          <div className="TodoItem">A</div>
          <div className="TodoItem">B</div>
          <div className="TodoItem">C</div>
        </div>
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
