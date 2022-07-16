const reducer = (state = "Hello", action) => {
  if (action.type == "signUp") {
    state = action.payload;
    return state;
  }
  return state;
};

export default reducer;
