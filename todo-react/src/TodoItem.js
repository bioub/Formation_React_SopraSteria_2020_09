import React from "react";

function TodoItem({ item = {} }) {
  console.log('render TodoItem');
  return (
    <div className="TodoItem">
      <input type="checkbox" defaultChecked={item.completed} />
      <span>{item.title}</span>
      <button>-</button>
    </div>
  );
}

export default TodoItem;
