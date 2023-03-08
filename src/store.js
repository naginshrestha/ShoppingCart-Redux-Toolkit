import { configureStore } from "@reduxjs/toolkit";
import cartreducer from './features/carts/cartSlice'


export const store= configureStore({

    reducer:{
        cart:cartreducer,
    }
})

export default store;