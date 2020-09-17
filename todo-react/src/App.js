import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

// class App extends Component {
//   state = {
//     newTodo: "Far...",
//     // todos: [
//     //   { id: 123, title: "Pain", completed: false },
//     //   { id: 234, title: "Lait", completed: true },
//     //   { id: 345, title: "Beurre", completed: false },
//     // ],
//     todos: new Array(2000).fill({}).map((t) => ({
//       id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
//       title: "ABC",
//       completed: false,
//     })),
//   };
//   handleChange = (event) => {
//     this.setState({
//       newTodo: event.target.value,
//     });
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.setState({
//       todos: [
//         ...this.state.todos,
//         {
//           id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
//           title: this.state.newTodo,
//           completed: false,
//         },
//       ],
//       newTodo: "",
//     });
//   };
//   render() {
//     const { newTodo, todos } = this.state;
//     return (
//       <div className="App">
//         <TodoForm
//           newTodo={newTodo}
//           onChange={this.handleChange}
//           onSubmit={this.handleSubmit}
//         />
//         <TodoList items={todos} />
//       </div>
//     );
//   }
// }

// {
//   newTodo: "Far...",
//   todos: []
// }

// [
//   "Far...", // premier appel de useState
//   []        // 2e appel de useState
// ]

function App() {
  const [newTodo, setNewTodo] = useState("Far...");
  const [todos, setTodos] = useState([
    { id: 123, title: "Pain", completed: false },
    { id: 234, title: "Lait", completed: true },
    { id: 345, title: "Beurre", completed: false },
  ]);

  function handleChange(event) {
    setNewTodo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        title: newTodo,
        completed: false,
      },
    ]);
    setNewTodo('');
  }

  function handleDelete(todo) {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  return (
    <div className="App">
      <TodoForm
        newTodo={newTodo}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <TodoList items={todos} onDelete={handleDelete} />
    </div>
  );
}

export default App;
