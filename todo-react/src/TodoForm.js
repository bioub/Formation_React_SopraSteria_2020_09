import React from "react";

function TodoForm({ newTodo = "", onSubmit = () => {}, onChange = () => {} }) {
  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <input value={newTodo} onChange={onChange} />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
