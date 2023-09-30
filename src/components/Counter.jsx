import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from '../store/counterSlice'

function Counter() {

    const dispatch = useDispatch()
    const counterValue = useSelector(state => state.counterStore.сountValue)



    return (
        <div>
            <h1>{counterValue}</h1>
            <button onClick={() => dispatch(increment(1))}>Increment</button>
            <button onClick={() => dispatch(decrement(1))}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default Counter