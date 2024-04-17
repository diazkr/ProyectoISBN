import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    appointments:[],
}

export const appointmentsSlice = createSlice({
    name: "appointments",
    initialState,
    reducers: {
        addAppointment: (state, action) => {
            state.appointments = action.payload
        },
    },
});

export const { addAppointment} = appointmentsSlice.actions;
