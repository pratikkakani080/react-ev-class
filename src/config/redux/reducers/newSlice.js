import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api";

export const fetchProducts = createAsyncThunk(
  "new/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get("/products");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  listOfNumbers: [],
  loading: false,
  products: {},
};

export const newSlice = createSlice({
  name: "new",
  initialState,
  reducers: {
    updateList: (state, action) => {
      state.listOfNumbers.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log(action);
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { updateList } = newSlice.actions;

export default newSlice.reducer;
