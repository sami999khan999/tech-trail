import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // if item already existes in the cart
      const existedItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existedItemIndex >= 0) {
        state.cartItems[existedItemIndex].cartQuantity += 1;
      } else {
        const assembledItems = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItems);
      }
      // add to loacl storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = updatedCartItems;
      // add to loacl storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    clearCart(state, action) {
      state.cartItems = [];
      // add to loacl storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const updatedItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = updatedItems;
      }
      // add to loacl storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getSubtotal(state, action) {
      const subtotal = state.cartItems.reduce((acc, item) => {
        const { price, cartQuantity } = item;
        const unitPrice = price * cartQuantity;

        acc += unitPrice;

        return acc;
      }, 0);

      state.cartTotalAmount = subtotal;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseCart,
  getSubtotal,
} = cartSlice.actions;
export default cartSlice.reducer;
