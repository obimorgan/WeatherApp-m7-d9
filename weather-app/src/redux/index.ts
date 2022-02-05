/** @format */

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import setWeatherReducer from "./reducer/index"

const composeThatAlwaysWorks =
   (window as any).__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export const initialState = {
  city: {
    weather: {},
  },
};

const rootReducer = combineReducers({
  city: setWeatherReducer,
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
       secretKey: "process.env.REACT_APP_SECRET_KEY",
      onError: (error) => {
        console.log("encryption error", error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  initialState,
  composeThatAlwaysWorks(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
