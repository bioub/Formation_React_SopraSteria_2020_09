import { createSelector } from "@reduxjs/toolkit";

export function todosSelector(state) {
  return state.todos;
}

export const todosItemsSelector = createSelector(
  todosSelector,
  (todos) => todos.items
);

export function todosNewTodoSelector(state) {
  return todosSelector(state).newTodo;
}

export const todosItemsLeftSelector = createSelector(
  todosItemsSelector,
  (items) => {
    console.log('todosItemsLeftSelector');
    return items.filter((i) => !i.completed).length
  }
);

// export function todosItemsLeftSelector(state) {
//   const items = todosItemsSelector(state);
//   const itemsLeft = items.filter((i) => !i.completed).length;
//   console.log('todosItemsLeftSelector', itemsLeft);
//   return itemsLeft;
// }
