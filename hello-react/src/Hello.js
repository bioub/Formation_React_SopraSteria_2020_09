import React from "react";

function Hello({ name = '' }) {
  return (
    <div className="Hello selected">
      Hello {name} !
    </div>
  );
}

export default Hello;