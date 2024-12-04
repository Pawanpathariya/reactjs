import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
const counterSlice=createSlice({
    name:"mycounter",
    initialState:{count:0},
    reducers:{
        increment:(state)=>{
            state.count++;
        },
        decrement:(state)=>{
            if(state.count<=0){
                message.error("Cannot decrement below 0")
            return
            }
            state.count--;
        }
    }
})

export const {increment,decrement}=counterSlice.actions;
export default counterSlice.reducer