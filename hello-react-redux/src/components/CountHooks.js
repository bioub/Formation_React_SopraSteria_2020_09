import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount } from "../store/actions";
import { selectCount } from "../store/selectors";

function CountHooks() {
  const increment = useSelector(selectCount);
  const dispatch = useDispatch();
  function onIncrement() {
    dispatch(incrementCount());
  }
  return (
    <button onClick={onIncrement} className="Button">
      {increment}
    </button>
  );
}

export default CountHooks;
