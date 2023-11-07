import { createSlice } from "@reduxjs/toolkit"
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 2,
  total: 0,
  isLoading: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item)=>{
        return item.id !== itemId;
      })
    },
    increase: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item)=>{
        return item.id === itemId;
      });
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item)=>{
        return item.id === itemId;
      });
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let newAmount = 0;
      let newTotal = 0;
      state.cartItems.forEach((item) => {
        newAmount += item.amount;
        newTotal += item.amount * item.price;
      });
      state.amount = newAmount;
      state.total = newTotal;
    },
  }
});

export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
} = cartSlice.actions;
 
export default cartSlice.reducer;