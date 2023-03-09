import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/carts/cartSlice';
import {CartItems} from './CartItems'


export const CartContainer = () => {

  const dispatch =useDispatch();

 const {cartItems,amounts,totals} = useSelector((state)=> state.cart)
 console.log("jj",totals);


    if(amounts < 1){
        return (
            <div className='d-flex mt-5 justify-content-center align-items-center flex-column'>
                <h2>Your Carts</h2>
                <h4>Your cart is currently empty!!!</h4>
            </div>
          )
    }

    return(

        <div className='cartlist m-5 mt-4  d-flex  flex-column '>
            <div className='carttop' >
            <h2 >Your Carts</h2>
            </div>
         

          <div className='cartlist'>
          {
            cartItems.map((item)=>{
                return(
       
                     <CartItems key={item.id} {...item}/>
                )
            })
          }
          </div>

          <div className='cartfooter ' >
            <footer>
                <hr/>
                <h4>Total <span>${totals.toFixed(2)}</span></h4>
            </footer>
          </div>
          <div className='d-grid mt-4 m-auto' >
            <button className='clearcart' onClick={() => dispatch(clearCart())}>
                Clear cart
            </button>
          </div>
        </div>
    )

}
