import { createSlice, nanoid } from "@reduxjs/toolkit";
const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    // decrementQuantity({ products }, { payload }) {
    //   vrienden[vrienden.findIndex((vr) => (vr.id = payload))].quantity--;
    // },
    // incrementQuantity({ products }, { payload }) {
    //   vrienden[vrienden.findIndex((vr) => (vr.id = payload))].quantity++;
    // },
  },
});
export const { productAction } = productsSlice.actions;
export default productsSlice.reducer;
