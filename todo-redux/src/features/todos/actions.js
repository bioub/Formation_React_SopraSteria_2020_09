import { createAction, nanoid } from "@reduxjs/toolkit";

// export function todoAdd(title) {
//   return {
//     type: 'TODO_ADD',
//     payload: {
//       id: nanoid(),
//       title,
//       completed: false,
//     },
//   }
// }

export const todoAdd = createAction("[todos component] submit form", (title) => ({
  payload: {
    id: nanoid(),
    title,
    completed: false,
  },
}));


// export function todoChange(payload) {
//   return {
//     type: 'TODO_CHANGE',
//     payload,
//   }
// }

export const todoChange = createAction("[todos component] input change");
