import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const store = configureStore(
    {
        reducer:{
         pawan:counterSlice
        }
    }
)

export default store