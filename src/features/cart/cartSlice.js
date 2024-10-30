import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  statusTab: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productID, quantity } =
        action.payload;
      const existingItem = state.items.findIndex(
        (item) => item.productID === productID
      );
      if (existingItem >= 0) {
        state.items[existingItem].quantity +=
          quantity;
      } else {
        state.items.push({ productID, quantity });
      }
    },
    changeQuantity(state, action) {
      const { productID, quantity } =
        action.payload;
      const existingItem = state.items.findIndex(
        (item) => item.productID === productID
      );
      if (quantity > 0) {
        state.items[existingItem].quantity =
          quantity;
      } else {
        state.items = state.items.filter(
          (item) => item.productID !== productID
        );
      }
    },
    toggleStatusTab(state) {
      if (state.statusTab === false) {
        state.statusTab = true;
      } else {
        state.statusTab = false;
      }
    },
  },
});

export const {
  addToCart,
  changeQuantity,
  toggleStatusTab,
} = cartSlice.actions;
export default cartSlice.reducer;
