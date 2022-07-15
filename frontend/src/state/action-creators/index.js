export const changeValue = (new_value) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
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
