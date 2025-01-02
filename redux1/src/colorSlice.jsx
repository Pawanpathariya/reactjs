import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice(
    {
name:"bcolor",
initialState:{
    cl:"red"
},
reducers:{
    changecolor:(state,action)=>{
        state.cl=action.payload.color
    }
}
    }
)
export const {changecolor}=colorSlice.actions
export default colorSlice.reducer