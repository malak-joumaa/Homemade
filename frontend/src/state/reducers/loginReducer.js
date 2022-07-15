const reducer = (state = "Login", action) => {
  switch (action.type) {
    case "getData":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default reducer;
