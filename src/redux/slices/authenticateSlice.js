// import { authenticateAction } from './../actions/authenticateAction';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    password: "",
    authenticate: false,
};

// function authenticateReducer(state=initialState, action) {
//     const { type, payload } = action;
//     switch (type) {
//         case "LOGIN_SUCCESS": {
//             return {
//                 ...state,
//                 email: payload.email,
//                 password: payload.password,
//                 authenticate: true,
//             };
//         }
//         case "LOGOUT_SUCCESS": {
//             return {
//                 ...state,
//                 authenticate: false,
//             };
//         }
//         default: {
//             return { ...state };
//         }
//     }
// }
// export default authenticateReducer;

const authenticateSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logInSuccess(state, action) {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.authenticate = true;
        },
        logOutSuccess(state) {
            state.email = '';
            state.password = '';
            state.authenticate = false;
        },
    }
});

export const { logInSuccess, logOutSuccess } = authenticateSlice.actions;
export default authenticateSlice.reducer;