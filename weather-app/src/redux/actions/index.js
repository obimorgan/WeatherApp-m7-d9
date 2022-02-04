/** @format */
export const SET_CITY = "SET_CITY";

export const setCityAction = () => {
  return async (dispatch) => {
    // console.log("here's my state currently", getState());
    setTimeout(() => {
      dispatch({
        type: SET_CITY,
        // payload: data,
      });
    }, 1000);
  };
};
