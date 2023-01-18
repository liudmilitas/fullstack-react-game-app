import {
  STICKER_LIST_FAIL,
  STICKER_LIST_REQUEST,
  STICKER_LIST_SUCCESS,
} from "../constants/stickerConstants";

export const stickerListReducer = (state = { stickers: [] }, action) => {
  switch (action.type) {
    case STICKER_LIST_REQUEST:
      return { loading: true, stickers: [] };

    case STICKER_LIST_SUCCESS:
      return {
        loading: false,
        stickers: action.payload,
      };

    case STICKER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
