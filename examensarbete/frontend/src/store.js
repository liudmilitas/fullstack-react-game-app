import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { stickerListReducer } from "./reducers/stickerReducers";

const reducer = combineReducers({ stickerList: stickerListReducer });

const initialState = {};

const store = configureStore({ reducer });

export default store;
