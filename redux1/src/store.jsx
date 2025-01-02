import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./colorSlice";
const store=configureStore({
    reducer:{
    mycolor:colorSlice
    }
    
})

export default store;