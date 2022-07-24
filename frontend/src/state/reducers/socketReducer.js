const reducer = (state = {}, action) => {
  if (action.type == "getSocket") {
    state = action.payload;
    return state;
  }
  return state;
};

export default reducer;
