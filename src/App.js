import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, CartContainer, Modal } from "./components";
import { calculateTotals } from './features/cart/cartSlice';
 
function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  
  return (
   <main>
    {isOpen && <Modal />}
    <Navbar />
    <CartContainer />
   </main> 
  );
}
export default App;
