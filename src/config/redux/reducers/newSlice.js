import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listOfNumbers: [],
};

export const newSlice = createSlice({
  name: "new",
  initialState,
  reducers: {
    updateList: (state, action) => {
      state.listOfNumbers.push(action.payload);
    },
  },
  extraReducers: () => {},
});

// Action creators are generated for each case reducer function
export const { updateList } = newSlice.actions;

export default newSlice.reducer;
