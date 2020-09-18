import { nanoid } from "@reduxjs/toolkit";

export function todoAdd(title) {
  return {
    type: 'TODO_ADD',
    payload: {
      id: nanoid(),
      title,
      completed: false,
    },
  }
}

export function todoChange(payload) {
  return {
    type: 'TODO_CHANGE',
    payload,
  }
}