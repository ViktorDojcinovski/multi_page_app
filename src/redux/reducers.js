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

const initialStatePosts = {
  loading: false,
  data: [],
  error: null,
};

// { type: 'FETCH', payload: data }
// Frontend 75
const postsReducer = (state = initialStatePosts, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_POSTS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export { counterReducer, authReducer, postsReducer };
