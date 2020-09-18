import React from "react";
import { useSelector } from "react-redux";
import { todosItemsLeftSelector } from "./selectors";

function TodoFooter() {
  const itemsLeft = useSelector(todosItemsLeftSelector);

  return (
    <div className="TodoFooter">
      <span>{itemsLeft} items left</span>
    </div>
  );
}

export default TodoFooter;
