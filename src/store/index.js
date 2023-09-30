import { configureStore } from "@reduxjs/toolkit";
import traficLightReducer from './traficSlice'
import todoSlice from "./todoSlice";

export default configureStore({
    reducer: {
        traficLight: traficLightReducer,
        todoStore: todoSlice,
    }
})