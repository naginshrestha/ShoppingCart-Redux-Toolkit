import {CartIcon} from '../icons'
import { useSelector } from 'react-redux'
import React from 'react'

const Navbar = () => {
    const {amount} = useSelector((store) => store.cart)
  return (
    <nav>
        <div className=' d-flex bg-light p-4 justify-content-between align-items-center'>

            <h3>Redux toolkit</h3>

            <div className="nav-container d-flex  justify-content-between align-items-center">
          
                <i class="fa-solid fa-cart-shopping fs-3 "></i>
                <span className='total-amount'> {amount}</span>




            </div>

        </div>
    </nav>

  )
}

export default Navbar