export const changeValue = (new_value) => {
  return (dispatch) => {
    dispatch({
      type: "signUp",
      payload: new_value,
    });
  };
};

export const addUserData = (new_value) => {
  return (dispatch) => {
    dispatch({
      type: "getData",
      payload: new_value,
    });
  };
};

export const addOrderData = (new_value) => {
  return (dispatch) => {
    dispatch({
      type: "getOrders",
      payload: new_value,
    });
  };
};
