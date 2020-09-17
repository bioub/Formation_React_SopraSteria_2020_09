import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ items = [] }) {
  const todoItems = items.map((it) => <TodoItem key={it.id} item={it} />);

  return <div className="TodoList">{todoItems}</div>;
}

export default TodoList;
