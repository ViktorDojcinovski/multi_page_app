import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
} from "./actions";
// Frontend 75
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsStart());
    // 1. async-await
    // 2. chaining 'then' methods

    fetch("https://jsonplaceholder.typicode.com/posts") // 200 ?? 404...
      .then((response) => {
        if (response.status !== 200) {
          throw Error("Error fetching posts.");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchPostsSuccess(data));
      })
      .catch((e) => {
        console.log("error", e);
        dispatch(fetchPostsFailure(e));
      });

    // async await --> try-catch
  };
};
