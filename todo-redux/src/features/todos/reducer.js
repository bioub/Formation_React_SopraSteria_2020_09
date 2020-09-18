import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
  newTodo: "Achet",
  items: [
    {
      id: 1,
      title: "Acheter du pain",
      completed: false,
    },
    {
      id: 2,
      title: "Aller au sport",
      completed: true,
    },
    {
      id: 3,
      title: "Utiliser Redux",
      completed: false,
    },
  ],
};

// export function todosReducer(state = initialState, action) {
//   switch (action.type) {
//     case "TODO_CHANGE":
//       return {
//         ...state,
//         newTodo: action.payload,
//       };
//     case "TODO_ADD":
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
//       };
//     default:
//       return state;
//   }
// }

export function newTodoReducer(state = initialState.newTodo, {type, payload}) {
  switch (type) {
    case "TODO_CHANGE":
      return payload;
    default:
      return state;
  }
}

export function itemsReducer(state = initialState.items, {type, payload}) {
  switch (type) {
    case "TODO_ADD":
      return [...state, payload];
    default:
      return state;
  }
}

export const todosReducer = combineReducers({
  newTodo: newTodoReducer,
  items: itemsReducer,
});