import React from 'react'
import InputButton from '../UI/inputButton'
import { TextField } from '@mui/material'

function InputField({ text, addTask, setText }) {
    return (
        <label className='input-block'>
            <TextField
                id="standard-basic"
                label="Add new TODO"
                variant="standard"
                value={text}
                className='textfield'
                onChange={event => setText(event.target.value)}
                style={{ color: 'blue' }} />
            <InputButton onClick={addTask} />
        </label>
    )
}

export default InputField