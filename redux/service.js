import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getProducts = createAsyncThunk("products/getProducts", async () => {
  const resp = await fetch(
    `https://wdev2.be/natalia21/eindwerk/api/service_lists.json?page=1`
  );
  const data = await resp.json();
  console.log(data);
  return data;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    error: false,
    products: [],
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.error = false;
      state.loading = false;
    },
    [getProducts.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});
export { getProducts };
export default productsSlice.reducer;
