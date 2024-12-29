import { createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:"count",
    initialState:0,
    reducers:{
        increment:(state,action)=>{
            return state+1
        },
        decrement:(state,action)=>{

            if(state>0){
            return state-1
        }
        else{
          alert("no negative value")
        }
    },
    reset:(state,action)=>{
        return state=0
    }
    }


   
})

export const {increment,decrement,reset}=counterSlice.actions
export default counterSlice.reducer