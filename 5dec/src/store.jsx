import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counterSlice";

const store = configureStore({
    reducer: {
        mycounter: countReducer
    }
});

export default store;