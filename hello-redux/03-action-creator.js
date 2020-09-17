const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const CHANGE_NAME = "CHANGE_NAME";

/*
fonction pure :
- prédictive, appelée avec des params identique elle a le même retour
- ne modifie pas ses params (state immuable)
- pas de side-effect (pas de console.log, de requete HTTP)
*/
function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.step,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.step,
      };
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
}

/** @type {import('redux').Store} */
const store = createStore(reducer, { count: 0, name: "Romain" });

console.log("initial state", store.getState());

store.subscribe(() => {
  console.log("new state", store.getState());
});

function increment(step = 1) {
  return { type: INCREMENT, step };
}

function decrement(step = 1) {
  return { type: DECREMENT, step };
}

function changeName(name) {
  return { type: CHANGE_NAME, name };
}

store.dispatch({ type: "click" }); // 0
store.dispatch(increment()); // 1
store.dispatch({ type: "submit" }); // 1
store.dispatch({ type: "page3/click" }); // 1
store.dispatch(decrement()); // 0
store.dispatch(changeName('Eric')); // 0
store.dispatch(increment(10)); // 1
store.dispatch({ type: "todoDelete" }); // 0
store.dispatch({ type: "click" }); // 0
