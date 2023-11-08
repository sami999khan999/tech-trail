import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
        toast("Quantity increased!", {
          style: {
            border: "2px solid #38bdf8",
            padding: "12px 32px",
            color: "#f0f9ff",
            borderRadius: "12px",
            fontWeight: "300",
            letterSpacing: "1px",
            backgroundColor: "#0EA5E9",
            fontSize: "18px",
          },
        });
      } else {
        const assembledItems = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItems);
        toast("Porduct added into cart!", {
          style: {
            border: "2px solid #38bdf8",
            padding: "12px 32px",
            color: "#f0f9ff",
            borderRadius: "12px",
            fontWeight: "300",
            letterSpacing: "1px",
            backgroundColor: "#0EA5E9",
            fontSize: "18px",
          },
        });
      }
      // add to loacl storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = updatedCartItems;
      toast("Porduct removed from cart!", {
        style: {
          border: "2px solid #fb7185",
          padding: "12px 32px",
          color: "#fff1f2",
          borderRadius: "12px",
          fontWeight: "300",
          letterSpacing: "1px",
          backgroundColor: "#f43f5e",
          fontSize: "18px",
        },
      });
      // add to loacl storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    clearCart(state, action) {
      state.cartItems = [];
      // add to loacl storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast("Cart cleared!", {
        style: {
          border: "2px solid #fb7185",
          padding: "12px 32px",
          color: "#fff1f2",
          borderRadius: "12px",
          fontWeight: "300",
          letterSpacing: "1px",
          backgroundColor: "#f43f5e",
          fontSize: "18px",
        },
      });
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast("Quantity decreased!", {
          style: {
            border: "2px solid #fb7185",
            padding: "12px 32px",
            color: "#fff1f2",
            borderRadius: "12px",
            fontWeight: "300",
            letterSpacing: "1px",
            backgroundColor: "#f43f5e",
            fontSize: "18px",
          },
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const updatedItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = updatedItems;
        toast("Porduct removed from cart!", {
          style: {
            border: "2px solid #fb7185",
            padding: "12px 32px",
            color: "#fff1f2",
            borderRadius: "12px",
            fontWeight: "300",
            letterSpacing: "1px",
            backgroundColor: "#f43f5e",
            fontSize: "18px",
          },
        });
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
