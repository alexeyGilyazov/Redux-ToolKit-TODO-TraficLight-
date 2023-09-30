import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        сountValue: 0
    },
    reducers: {
        increment(state, action) {
            state.сountValue += action.payload
        },
        decrement(state, action) {
            state.сountValue -= action.payload
        },
        reset(state) {
            state.сountValue = 0
        }
    }
})

export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer
