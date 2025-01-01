import { createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
   increment:(state)=>{
    state.count=state.count+1
   },
   decrement:(state)=>{

    if(state.count>0){
        state.count=state.count-1
    }
    else{
    alert("cannot decrement")
    }
   }
    }
})
export default counterSlice.reducer
export const {increment,decrement}=counterSlice.actions