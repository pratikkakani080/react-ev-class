import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import myReducer from "./reducers/mySlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    my: myReducer,
  },
});
