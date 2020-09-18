import { usersFetchSuccess } from "./actions";

const { createReducer, combineReducers } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
  loading: false,
};

export const usersItemsReducer = createReducer(initialState.items, {
  [usersFetchSuccess]: (state, {payload}) => payload,
});

export const usersLoadingReducer = createReducer(initialState.loading, {
  [usersFetchSuccess]: () => false,
});

export const usersReducer = combineReducers({
  items: usersItemsReducer,
  loading: usersLoadingReducer,
});
