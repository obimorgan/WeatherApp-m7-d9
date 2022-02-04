/** @format */

import { initialState } from "..";
import { SET_WEATHER } from "../actions";

const setWeatherReducer = (state = initialState.city, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };
    default:
      return state;
  }
};

export default setWeatherReducer;
