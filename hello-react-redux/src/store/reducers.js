import { combineReducers } from "redux";
import { CHANGE_NAME, DECREMENT, INCREMENT } from "./constants";

export const rootReducer = combineReducers({
  count: countReducer,
  name: nameReducer,
});

export function countReducer(state = 0, { type, payload }) {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
}

export function nameReducer(state = "Romain", { type, payload }) {
  switch (type) {
    case CHANGE_NAME:
      return payload;
    default:
      return state;
  }
}
