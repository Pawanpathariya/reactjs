import {createSlice} from "@reduxjs/toolkit";

const counterSlice=createSlice({
name:"counter",
initialState:{
    count:0
},
reducers:{
increment:(state)=>{
state.count++
},
decrement:(state)=>{

    if(state.count>0){  
state.count--
}
else{
    alert("count can't be negative")
}
}

}
})


export default counterSlice.reducer
export const {increment,decrement}=counterSlice.actions 