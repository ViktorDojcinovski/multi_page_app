import { fetchPostsStart, fetchPostsSuccess } from "./actions";

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsStart());

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.data;

    dispatch(fetchPostsSuccess(data));

    // dispatch(fetchPostsFailure())
  };
};
