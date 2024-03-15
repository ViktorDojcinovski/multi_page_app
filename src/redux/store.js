import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import { counterReducer, authReducer, postsReducer } from "./reducers";

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  posts: postsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
