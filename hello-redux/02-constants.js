const { createStore } = require("redux");

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

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
        count: state.count + 1,
      };
    case DECREMENT:
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
store.dispatch({ type: INCREMENT }); // 1
store.dispatch({ type: "submit" }); // 1
store.dispatch({ type: "page3/click" }); // 1
store.dispatch({ type: DECREMENT }); // 0
store.dispatch({ type: "nameChange" }); // 0
store.dispatch({ type: "todoDelete" }); // 0
store.dispatch({ type: "click" }); // 0
