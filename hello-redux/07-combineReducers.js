const { createStore, combineReducers } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const CHANGE_NAME = "CHANGE_NAME";

const initialState = { count: 0, name: "Romain" };

const rootReducer = combineReducers({
  count: countReducer,
  name: nameReducer,
});

function countReducer(state = initialState.count, { type, payload }) {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
}

function nameReducer(state = initialState.name, { type, payload }) {
  switch (type) {
    case CHANGE_NAME:
      return payload;
    default:
      return state;
  }
}

/** @type {import('redux').Store} */
const store = createStore(rootReducer);

console.log("initial state", store.getState());

store.subscribe(() => {
  console.log("new state", store.getState());
});

// https://github.com/redux-utilities/flux-standard-action
function increment(payload = 1) {
  return { type: INCREMENT, payload };
}

function decrement(payload = 1) {
  return { type: DECREMENT, payload };
}

function changeName(payload) {
  return { type: CHANGE_NAME, payload };
}

store.dispatch({ type: "click" }); // 0
store.dispatch(increment()); // 1
store.dispatch({ type: "submit" }); // 1
store.dispatch({ type: "page3/click" }); // 1
store.dispatch(decrement()); // 0
store.dispatch(changeName("Eric")); // 0
store.dispatch(increment(10)); // 1
store.dispatch({ type: "todoDelete" }); // 0
store.dispatch({ type: "click" }); // 0
