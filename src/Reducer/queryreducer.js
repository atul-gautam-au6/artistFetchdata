import {
  QUERY_FETCH_FAIL,
  QUERY_FETCH_REQUEST,
  QUERY_FETCH_SUCCESS,
} from "../constant/actionConstant";

export const fetchQueryReducer = (state = {}, action) => {
  switch (action.type) {
    case QUERY_FETCH_REQUEST:
      return { loading: true };
    case QUERY_FETCH_SUCCESS:
      return { loading: false, books: action.payload };
    case QUERY_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
