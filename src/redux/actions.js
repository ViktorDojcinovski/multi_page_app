import { actionTypes } from "./actionTypes";

const increment = () => ({
  type: actionTypes.INCREMENT,
});

const decrement = () => ({
  type: actionTypes.DECREMENT,
});

const login = () => ({
  type: actionTypes.LOGIN,
});

const logout = () => ({
  type: actionTypes.LOGOUT,
});

export { increment, decrement, login, logout };
