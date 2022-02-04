/** @format */
export const SET_WEATHER = "SET_WEATHER";

export const setWeatherToCityAction = (searchInput) => {
  // const apiKey = process.env.REACT_API_KEY;
  // url = `api.openweathermap.org/data/2.5`

  return async (dispatch) => {
    // console.log("here's my state currently", getState());
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=75efdabcaec02d5334d12a7b5aecd8dd`
      );
      if (response.ok) {
        console.log("Im fetching");
        let data = await response.json();
        console.log("fetch");
        dispatch({
          type: SET_WEATHER,
          payload: data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
