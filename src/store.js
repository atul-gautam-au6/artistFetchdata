import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchQueryReducer } from "./Reducer/queryreducer";
const intialState = { data: {} };
const reducer = combineReducers({
  booklist: fetchQueryReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  intialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
