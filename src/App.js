import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, CartContainer } from "./components";
import { Modal } from './components';
import { calculateTotals } from './features/cart/cartSlice';
 
function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  
  return (
   <main>
    <Modal />
    <Navbar />
    <CartContainer />
   </main> 
  );
}
export default App;
