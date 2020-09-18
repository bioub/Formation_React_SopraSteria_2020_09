import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { todosReducer } from '../features/todos/reducer';
import { usersReducer } from '../features/users/reducers';

export default configureStore({
  // devTools: false,
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    users: usersReducer,
  },
});
