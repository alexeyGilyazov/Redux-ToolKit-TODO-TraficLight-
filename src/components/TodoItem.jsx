import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleComplited } from '../store/todoSlice'
import TaskAltTwoToneIcon from '@mui/icons-material/TaskAltTwoTone';
import Checkbox from '@mui/material/Checkbox';
import { Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function TodoItem({ id, text, complited }) {

    const dispatch = useDispatch()

    return (
        <li className='todoItem' >
            <Checkbox {...label} icon={<TaskAltTwoToneIcon />} checkedIcon={<TaskAltTwoToneIcon />} onChange={() => dispatch(toggleComplited({ id }))} checked={complited} />
            <Typography sx={{ fontSize: 40, color: '#6c6c6c' }} className={`todoItem__text ${complited ? 'complited' : ''}`}>{text}</Typography>
            <IconButton aria-label="delete" onClick={() => dispatch(removeTodo({ id }))} className='delete'>
                <DeleteIcon />
            </IconButton>
        </li>
    )
}

export default TodoItem