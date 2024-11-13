import { createSlice } from "@reduxjs/toolkit";



const CounterSlice = createSlice({

    name:"Counter",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count+=1
   },
   decrement: (state) => {
    if (state.count > 0) {
        state.count -= 1;
    }
},
        reset:(state)=>{
            state.count=0
   },
        incrementByAmount:(state,action)=>{
            state.count+=action.payload
        }
    }
})

    export const {increment,decrement,reset,incrementByAmount}= CounterSlice.actions
    export default CounterSlice.reducer