const initialState = {
  counter: 1,
};

const rootreducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      console.log("state", state);
      return state;
  }
};

export default rootreducer;
