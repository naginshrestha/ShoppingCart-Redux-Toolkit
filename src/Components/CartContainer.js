import React from 'react'
import { useSelector } from 'react-redux'
import {CartItems} from './CartItems'

export const CartContainer = () => {

    const {cartItems,amount,total} = useSelector((state)=> state.cart)

    if(amount < 1){
        return (
            <div className='text-align-center'>
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
         

          <div className='bodyy'>
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
                <h4>Total <span>${total}</span></h4>
            </footer>
          </div>
          <div className='d-grid mt-4  m-auto' >
            <button className='text-align-center'>
                Clear cart
            </button>
          </div>
        </div>
    )

}
