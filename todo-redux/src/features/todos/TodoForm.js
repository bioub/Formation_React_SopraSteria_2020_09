import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosNewTodoSelector } from "./selectors";
import { todoChange, todoAdd } from "./actions";

function TodoForm() {
  const newTodo = useSelector(todosNewTodoSelector);
  const dispatch = useDispatch();

  /** @param {Event} event  */
  function onSubmit(event) {
    event.preventDefault();
    dispatch(todoAdd(newTodo));
  }

  /** @param {Event} event  */
  function onChange(event) {
    dispatch(todoChange(event.target.value));
  }

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <input value={newTodo} onChange={onChange} />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
