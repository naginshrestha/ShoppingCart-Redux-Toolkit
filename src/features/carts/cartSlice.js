import { createSlice } from "@reduxjs/toolkit";
import cartItem from '../../cartItem'

const initialState ={
    cartItems :cartItem,
    amount:15 ,
    total:0,
    isLoading:true,
}

const cartSlice = createSlice({

    name:"carts",
    initialState,



})
 const {reducer} = cartSlice
export default reducer;