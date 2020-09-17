import React from "react";
import { useSelector } from "react-redux";
import { selectName } from "../store/selectors";
import Hello from "./Hello";

function HelloHooksContainer() {
  const name = useSelector(selectName);
  return (
    <Hello name={name} />
  );
}

export default HelloHooksContainer;