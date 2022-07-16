const reducer = (state = {}, action) => {
  if (action.type == "getData") {
    state = action.payload;
    return state;
  }
  return state;
};

export default reducer;
