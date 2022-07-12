const reducer = (state = "Hello", action) => {
  switch (action.type) {
    case "deposit":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default reducer;
