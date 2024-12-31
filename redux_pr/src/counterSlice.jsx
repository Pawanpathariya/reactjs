import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count:0
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            if(state.count>0){
                state.count -= 1;
            }
            else{
               alert("count can not be less than 0")
            }
        }
        }
    });
    export default counterSlice.reducer;
    export const { increment, decrement } = counterSlice.actions;