import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./colorSlice";
const store=configureStore({
    reducer:{
    myclr:colorSlice
    }
})

export default store