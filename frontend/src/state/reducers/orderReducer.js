const reducer = (state = {}, action) => {
  if (action.type == "getOrders") {
    state = action.payload;
    return state;
  }
  return state;
};

export default reducer;
