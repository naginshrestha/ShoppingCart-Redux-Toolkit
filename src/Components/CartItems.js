import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {removeItem ,increment ,decrement } from '../features/carts/cartSlice'


export const CartItems = ({id,img,price,title,amount}) => {

  const dispatch = useDispatch();


  return (

    <div className='cartItems mt-2 mb-2 d-flex justify-content-center align-items-center'>

        <div className='cartleft d-flex  justify-content-start align-items-center'>
        <img className='image '  src={img} alt={title}/>

        <div >
            <h5>{title}</h5>

            <h6>{price}</h6>

            <i  class="fa-solid fa-trash" onClick={()=>dispatch(removeItem(id))}></i>
        </div>
        </div>

        <div className='cartright '>
           <div className=' d-flex align-items-baseline justify-content-end'>

            <div className='p-2 bg-success rounded-circle ' onClick={() =>dispatch(increment({id}))}>
            <i class="fa-solid fa-plus" ></i>
            </div>

            <div className='m-1 p-2 '>
            <h6 >{amount}</h6>

            </div>
       
        <div className='p-2 bg-success rounded-circle ' onClick={() =>dispatch(decrement({id}))}>
        <i class="fa-solid fa-minus"></i>
        </div>
        

        </div>
        </div>



    </div>
  )
}
