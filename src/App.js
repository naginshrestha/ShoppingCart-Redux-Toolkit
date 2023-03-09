import './App.css';
import { CartContainer } from './Components/CartContainer';
import Navbar from './Components/Navbar';
import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import {totalAmount} from './features/carts/cartSlice'

function App() {

  const {cartItems} = useSelector((state)=> state.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalAmount());
  }, [cartItems]);


  return (
    <div className="App">
     <Navbar/>
     <CartContainer/>
    </div>
  );
}

export default App;
