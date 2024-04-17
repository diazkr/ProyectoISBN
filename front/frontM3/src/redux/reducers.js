import { combineReducers } from "redux";
import { userLoginSlice } from "./userLoginSlice";
import { appointmentsSlice } from "./appointmentSlice";

const rootReducer = combineReducers({
    userLogin: userLoginSlice.reducer,
    appointments: appointmentsSlice.reducer,
});

export default rootReducer;
