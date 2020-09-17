import React from "react";
import { useSelector } from "react-redux";
import { selectName } from "../store/selectors";

function HelloHooks() {
  const name = useSelector(selectName);
  return (
    <div className="Hello">
      Hello {name} !
    </div>
  );
}

export default HelloHooks;