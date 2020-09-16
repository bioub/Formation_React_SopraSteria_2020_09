const coords = { x: 1, y: 2 };


// const valX = coords.x;
// const valY = coords.y;

// ES2015
// destructuring object

//    { x: 1   , y: 2    }
const { x: valX, y: valY } = coords;

function getCoords({ x: valX, y: valY }) {
  console.log(valX);
  console.log(valY);
}

// avec shorthand property
// avec default param
function getCoords({ x = 0, y = 0 }) {
  console.log(x);
  console.log(y);
}

getCoords(coords);