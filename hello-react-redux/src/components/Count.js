import React from "react";

function Count({ increment = 0, onIncrement = () => {} }) {
  return (
    <button onClick={onIncrement} className="Button">
      {increment}
    </button>
  );
}

export default Count;
