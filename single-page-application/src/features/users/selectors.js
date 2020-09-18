export function usersItemsSelector(state) {
  return state.users.items;
}

export function usersItemByIdSelector(id) {
  return function(state) {
    return state.users.items.find((u) => u.id === Number(id));
  }
}