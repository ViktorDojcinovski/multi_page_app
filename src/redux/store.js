import { createStore, combineReducers } from "redux";

import { counterReducer, authReducer } from "./reducers";

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
