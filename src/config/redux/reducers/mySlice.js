import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: "",
};

export const mySlice = createSlice({
  name: "my",
  initialState,
  reducers: {
    updateTest: (state, action) => {
      state.test = action.payload;
    },
  },
  extraReducers: () => {},
});

// Action creators are generated for each case reducer function
export const { updateTest } = mySlice.actions;

export default mySlice.reducer;
