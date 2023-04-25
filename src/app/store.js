import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/authSlice"
import ThemeReducer from "../features/themeSlice"

const store = configureStore({
    reducer : {
        auth : AuthReducer,
        theme : ThemeReducer
    }
})

export default store