import { createSlice, nanoid } from "@reduxjs/toolkit";

const searchIndex = (arr, id) => arr.findIndex((item) => item.id === id);

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
  },
  reducers: {
    addItem({ basket }, { payload }) {
      const index = searchIndex(basket, payload);
      if (index === -1) {
        basket.push({
          id: payload,
          quantity: 1,
        });
      } else {
        basket[index].quantity++;
      }
    },
    removeItem({ basket }, { payload }) {
      const index = searchIndex(basket, payload);
      if (index >= 0) {
        basket.splice(index, 1);
      }
    },
    setQuantity({ basket }, { payload }) {
      const index = searchIndex(basket, payload.id);
      if (index >= 0) {
        basket[index].quantity = payload.quantity;
      }
    },
    clear({ basket }) {
      basket.length = 0;
    },
  },
});
export const { addItem, removeItem, setQuantity, clear } = basketSlice.actions;
export default basketSlice.reducer;
