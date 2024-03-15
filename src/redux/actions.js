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

// Frontend 75
const fetchPostsStart = () => ({
  type: actionTypes.FETCH_POSTS_START,
});

const fetchPostsSuccess = (data) => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  payload: data,
});

const fetchPostsFailure = () => ({
  type: actionTypes.FETCH_POSTS_FAILURE,
});

export {
  increment,
  decrement,
  login,
  logout,
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
};
