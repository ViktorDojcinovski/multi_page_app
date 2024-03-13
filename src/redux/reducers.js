import { actionTypes } from "./actionTypes";

const initialStateCounter = {
  counter: 0,
};

const counterReducer = (state = initialStateCounter, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { counter: state.counter + 1 };
    case actionTypes.DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const initialStateAuth = {
  isAuthenticated: false,
};

const authReducer = (state = initialStateAuth, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { isAuthenticated: true };
    case actionTypes.LOGOUT:
      return { isAuthenticated: false };
    default:
      return state;
  }
};

export { counterReducer, authReducer };
