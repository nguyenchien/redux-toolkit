import { createSlice } from "@reduxjs/toolkit"
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 0,
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
  }
});

export const {
  clearCart,
  removeItem,
  increase,
  decrease,
} = cartSlice.actions;
 
export default cartSlice.reducer;