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
  initialState
});

export default cartSlice.reducer