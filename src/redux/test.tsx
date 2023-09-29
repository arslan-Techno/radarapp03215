import { createSlice } from "@reduxjs/toolkit";












const testSlice = createSlice({
    name:'testSlice',
    initialState:{
        value:0
    },
    reducers:{
        incriment:(state,action)=>{
            state.value=action.payload + state.value
        }
    }
})


export const {incriment} =  testSlice.actions

export const test =  testSlice.reducer







