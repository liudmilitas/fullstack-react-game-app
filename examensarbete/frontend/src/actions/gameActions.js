import axios from "axios";
import {
  GAME_CREATE_FAIL,
  GAME_CREATE_REQUEST,
  GAME_CREATE_SUCCESS,
  GAME_LIST_FAIL,
  GAME_LIST_MY_FAIL,
  GAME_LIST_MY_REQUEST,
  GAME_LIST_MY_SUCCESS,
  GAME_LIST_REQUEST,
  GAME_LIST_SUCCESS,
} from "../constants/gameConstants";

export const createGame = (sticker) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GAME_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/api/games/post/`,
      { sticker: sticker },
      config
    );

    dispatch({
      type: GAME_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAME_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listMyGames = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GAME_LIST_MY_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/games/mygames/`, config);

    dispatch({
      type: GAME_LIST_MY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAME_LIST_MY_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listGames = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GAME_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/games/`, config);

    dispatch({
      type: GAME_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAME_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
