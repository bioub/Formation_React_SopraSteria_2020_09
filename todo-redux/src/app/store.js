import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { todosReducer } from '../features/todos/reducer';

export default configureStore({
  // devTools: false,
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});
