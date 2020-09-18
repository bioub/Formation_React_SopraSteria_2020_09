import { CHANGE_NAME, DECREMENT, INCREMENT } from "./constants";

export function incrementCount(payload = 1) {
  return { type: INCREMENT, payload };
}

export function decrementCount(payload = 1) {
  return { type: DECREMENT, payload };
}

export function changeName(payload) {
  return { type: CHANGE_NAME, payload };
}

// function createAction(type) {
//   return function(payload) {
//     return {
//       type, payload,
//     }
//   }
// }

// export const changeName = createAction(CHANGE_NAME);