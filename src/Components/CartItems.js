import React from 'react'

export const CartItems = ({id,img,price,title,amount}) => {
  return (

    <div className='cartItems mt-4 mb-4 d-flex justify-content-between align-items-center'>

        <div className='cartleft d-flex  justify-content-start align-items-center'>
        <img className='image '  src={img} alt={title}/>

        <div className='gg'>
            <h5>{title}</h5>

            <h6>{price}</h6>

            <i className='bg-danger' class="fa-solid fa-trash"></i>
        </div>
        </div>

        <div className='cartright '>
           <div className=' d-flex align-items-baseline justify-content-end'>

            <div className='p-2 bg-success rounded-circle '>
            <i class="fa-solid fa-plus"></i>
            </div>

            <div className='m-1 p-2 '>
            <h6 > 14</h6>

            </div>
       
        <div className='p-2 bg-success rounded-circle '>
        <i class="fa-solid fa-minus"></i>
        </div>
        

        </div>
        </div>



    </div>
  )
}
