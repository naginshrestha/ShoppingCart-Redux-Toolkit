import { createSlice } from "@reduxjs/toolkit";
import cartItem from '../../cartItem'

const initialState ={
    cartItems :cartItem,
    amounts: 4,
    totals: 0,
    isLoading:true,
}

const cartSlice = createSlice({

    name:"carts",
    initialState,
    reducers:{
        clearCart:(state) =>{
            state.cartItems =[];
        },
        removeItem: (state,{payload}) =>{
            const itemId = payload;
            state.cartItems = state.cartItems.filter((item) =>( item.id !== itemId))

        },
        increment:(state,{payload}) =>{

            const data= state.cartItems.find((item) => item.id === payload.id)

            data.amount >=0 ? data.amount =  data.amount + 1 : data.amount =0
        },
        decrement :(state,{payload})=>{


            const data = state.cartItems.find(item=>payload.id === item.id);
            data.amount >0 ?  data.amount =  data.amount - 1 : data.amount =0

        },
        totalAmount:(state)=>{
            let amt =0
            let total =0

            state.cartItems.forEach((item)=>{
                amt += item.amount;
                total += item.amount * item.price

            });
    
            state.amounts =amt
            state.totals = total

            console.log("abc",state.amounts);


        }
    }



})
 export  const {clearCart ,removeItem, increment,decrement,totalAmount } =cartSlice.actions;
 const {reducer} = cartSlice
export default reducer ;

