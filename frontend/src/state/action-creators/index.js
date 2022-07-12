export const changeValue = (new_value) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: new_value,
    });
  };
};
