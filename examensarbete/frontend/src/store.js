import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers/roorReducer";

const reducer = combineReducers({});

const initialState = {};

const store = configureStore({ reducer });

export default store;
