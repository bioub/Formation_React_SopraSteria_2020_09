export function selectCount(state) {
  // si operation couteuse -> memoized
  return state.count;
}

export function selectName(state) {
  return state.name;
}