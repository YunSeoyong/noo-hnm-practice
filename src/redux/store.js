import { configureStore } from "@reduxjs/toolkit";
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import { thunk } from "redux-thunk";
// import rootReducer from "./reducers";
import authenticateSlice from "./slices/authenticateSlice";
import productSlice from "./slices/productSlice";

// let store = createStore(
//     rootReducer, 
//     composeWithDevTools(applyMiddleware(thunk)),
// );

const store = configureStore({
    reducer: {
        auth: authenticateSlice,
        product: productSlice,
    }
})

export default store;