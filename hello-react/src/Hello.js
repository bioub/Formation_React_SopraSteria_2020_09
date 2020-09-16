import React from "react";

function Hello({ name = '' }) {
  // return '<div class="Hello">Hello</div>';
  // const divEl = document.createElement('div');
  // divEl.className = 'Hello';
  // divEl.innerText = 'Hello';

  // setTimeout(() => {
  //   document.querySelector('.App').appendChild(divEl);
  // }, 100);

  // return '';

  // return React.createElement("div", { className: "Hello" }, 
  //   React.createElement('span', {}, 'Hello')
  // );

  return (
    <div className="Hello">
      Hello {name} !
    </div>
  );
}

export default Hello;