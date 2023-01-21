import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { stickerListReducer } from "./reducers/stickerReducers";
import { userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  stickerList: stickerListReducer,
  userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = { userLogin: { userInfo: userInfoFromStorage } };

const store = configureStore({ reducer });

export default store;
