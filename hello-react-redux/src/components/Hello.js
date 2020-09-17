import React from "react";

function Hello({ name = '' }) {
  return (
    <div className="Hello">
      Hello {name} !
    </div>
  );
}

export default Hello;