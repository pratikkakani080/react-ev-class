import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import myReducer from "./reducers/mySlice";
import newReducer from "./reducers/newSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    my: myReducer,
    new: newReducer,
  },
});
