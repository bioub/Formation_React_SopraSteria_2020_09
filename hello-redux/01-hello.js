const { createStore } = require("redux");

/*
fonction pure :
- prédictive, appelée avec des params identique elle a le même retour
- ne modifie pas ses params (state immuable)
- pas de side-effect (pas de console.log, de requete HTTP)
*/
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

/** @type {import('redux').Store} */
const store = createStore(reducer, { count: 0, name: 'Romain' });

console.log("initial state", store.getState());

store.subscribe(() => {
  console.log("new state", store.getState());
});

store.dispatch({ type: "click" }); // 0
store.dispatch({ type: "increment" }); // 1
store.dispatch({ type: "submit" }); // 1
store.dispatch({ type: "page3/click" }); // 1
store.dispatch({ type: "decrement" }); // 0
store.dispatch({ type: "nameChange" }); // 0
store.dispatch({ type: "todoDelete" }); // 0
store.dispatch({ type: "click" }); // 0
