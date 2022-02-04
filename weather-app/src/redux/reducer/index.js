/** @format */

import { initialState } from "..";
import { SET_CITY } from "../actions";

const setCityReducer = (state = initialState.city, action) => {
  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default setCityReducer;
