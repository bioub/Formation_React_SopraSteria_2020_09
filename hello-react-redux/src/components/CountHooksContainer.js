import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount } from "../store/actions";
import { selectCount } from "../store/selectors";
import Count from "./Count";

function CountHooksContainer() {
  const increment = useSelector(selectCount);
  const dispatch = useDispatch();
  function onIncrement() {
    dispatch(incrementCount());
  }
  return <Count increment={increment} onIncrement={onIncrement} />;
}

export default CountHooksContainer;
