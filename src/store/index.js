import { configureStore } from "@reduxjs/toolkit";
import traficLightReducer from './traficSlice'
import todoSlice from "./todoSlice";
import counterSlice from "./counterSlice";

export default configureStore({
    reducer: {
        traficLight: traficLightReducer,
        todoStore: todoSlice,
        counterStore: counterSlice,
    }
})