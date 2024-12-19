import { createSlice } from "@reduxjs/toolkit"; 

const colorSlice = createSlice(
    {
        name:"color",
        initialState:{color:"red"},
        reducers:{
            colorChange:(state,actions)=>{
                state.color=actions.payload
            }
        }
    }
)

export default colorSlice.reducer
export const {colorChange}=colorSlice.actions