import {createSlice} from "@reduxjs/toolkit";

const colorSlice=createSlice({
name:"bgcl",
initialState:{
    cl:"red"},
    reducers:{
        changeColor(state,action){
            state.cl=action.payload
        }
    }

})

export const{changeColor}=colorSlice.actions;
export default colorSlice.reducer