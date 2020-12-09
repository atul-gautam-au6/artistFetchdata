import {
  QUERY_FETCH_FAIL,
  QUERY_FETCH_REQUEST,
  QUERY_FETCH_SUCCESS,
} from "../constant/actionConstant";
import axios from "axios";
export const getData = (query) => async (dispatch) => {
  try {
    dispatch({ type: QUERY_FETCH_REQUEST });
    const { data } = await axios.get(
      `https://itunes.apple.com/search?term=${query}`
    );
    dispatch({ type: QUERY_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: QUERY_FETCH_FAIL, payload: error.message });
  }
};
