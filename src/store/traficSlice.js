import { createSlice } from "@reduxjs/toolkit";

const traficLightReducer = createSlice({
    name: 'traficLight',
    initialState: {
        actualColor: ''
    },
    reducers: {
        setActualColor(state, action) {
            state.actualColor = action.payload
        },
    }
})

export const { setActualColor, freeMode } = traficLightReducer.actions
export default traficLightReducer.reducer