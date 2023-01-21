import axios from "axios";
import {
  STICKER_LIST_FAIL,
  STICKER_LIST_REQUEST,
  STICKER_LIST_SUCCESS,
} from "../constants/stickerConstants";

export const listStickers = () => async (dispatch) => {
  try {
    dispatch({ type: STICKER_LIST_REQUEST });

    const { data } = await axios.get("/api/stickers/");
    dispatch({
      type: STICKER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STICKER_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.response,
    });
  }
};
