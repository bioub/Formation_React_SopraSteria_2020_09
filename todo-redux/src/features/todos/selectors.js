export function todosSelector(state) {
  return state.todos;
}

export function todosItemsSelector(state) {
  return todosSelector(state).items;
}

export function todosNewTodoSelector(state) {
  return todosSelector(state).newTodo;
}