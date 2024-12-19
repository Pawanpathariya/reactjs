import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice(
    {
        name:"pawan",
        initialState:{count:0},
       reducers:{
        increment:(state,actions)=>{
            state.count=state.count+1
        },
        decrement:(state,actions)=>{
            state.count=state.count-1
        }   
       }
    }
)

export default counterSlice.reducer
export const {increment,decrement}=counterSlice.actions