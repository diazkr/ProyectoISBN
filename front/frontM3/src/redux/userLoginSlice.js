import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    userLogin:{},
}

export const userLoginSlice = createSlice({
    name: "userLogin",
    initialState,
    reducers: {
        addUserLogin: (state,action)=>{
            state.userLogin = action.payload

        }
    }
})

export const {addUserLogin} = userLoginSlice.actions;