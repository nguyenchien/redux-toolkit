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
    }
  }
});

console.log(cartSlice);

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;