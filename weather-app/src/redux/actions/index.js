/** @format */
export const SET_WEATHER = "SET_WEATHER";

export const setWeatherToCityAction = (searchInput) => {
  // const apiKey = process.env.REACT_API_KEY;

  return async (dispatch) => {
    // console.log("here's my state currently", getState());
    try {
      console.log("Im fetching");
      let response = await fetch(
        `api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=75efdabcaec02d5334d12a7b5aecd8dd`
      );
      if (response.ok) {
        let data = response.json();
        dispatch({
          type: SET_WEATHER,
          payload: data,
        });
      } else {
        alert("fetch was unseccesfull");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
