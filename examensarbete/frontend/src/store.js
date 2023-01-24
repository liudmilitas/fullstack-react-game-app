import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  gameCreateReducer,
  gameListMyReducer,
  gameListReducer,
} from "./reducers/gameReducers";
import { stickerListReducer } from "./reducers/stickerReducers";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  stickerList: stickerListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  gameCreate: gameCreateReducer,
  gameList: gameListReducer,
  gameListMy: gameListMyReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = { userLogin: { userInfo: userInfoFromStorage } };

const store = configureStore({ reducer });

export default store;
