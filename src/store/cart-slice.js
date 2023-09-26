import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addCart(state, action) {
      const newItem = action.payload;

      const isExisting = state.itemsList.find((item) => item.id === newItem.id);
      if (isExisting) {
        isExisting.quantity++;
        isExisting.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity++;
      }
    },
    removeCart(state, action) {
      const id = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === id);
      if (existingItem && existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((i) => i.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    sethowCart(state) {
      state.showCart ? (state.showCart = false) : (state.showCart = true);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
