import {
  GAME_CREATE_FAIL,
  GAME_CREATE_REQUEST,
  GAME_CREATE_RESET,
  GAME_CREATE_SUCCESS,
  GAME_LIST_FAIL,
  GAME_LIST_MY_FAIL,
  GAME_LIST_MY_REQUEST,
  GAME_LIST_MY_RESET,
  GAME_LIST_MY_SUCCESS,
  GAME_LIST_REQUEST,
  GAME_LIST_SUCCESS,
} from "../constants/gameConstants";

export const gameCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case GAME_CREATE_REQUEST:
      return {
        loading: true,
      };

    case GAME_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        game: action.payload,
      };

    case GAME_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case GAME_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const gameListMyReducer = (state = { games: [] }, action) => {
  switch (action.type) {
    case GAME_LIST_MY_REQUEST:
      return {
        loading: true,
      };

    case GAME_LIST_MY_SUCCESS:
      return {
        loading: false,
        games: action.payload,
      };

    case GAME_LIST_MY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case GAME_LIST_MY_RESET:
      return {
        games: [],
      };

    default:
      return state;
  }
};

export const gameListReducer = (state = { games: [] }, action) => {
  switch (action.type) {
    case GAME_LIST_REQUEST:
      return {
        loading: true,
      };

    case GAME_LIST_SUCCESS:
      return {
        loading: false,
        games: action.payload,
      };

    case GAME_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
