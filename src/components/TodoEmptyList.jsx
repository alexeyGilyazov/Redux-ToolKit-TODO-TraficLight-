import { Typography } from '@mui/material'
import React from 'react'

function TodoEmptyList() {
    return (
        <Typography sx={{ fontSize: 30, color: '#6c6c6c', textAlign: 'center' }} level="h2">The TODO list is empty</Typography>
    )
}

export default TodoEmptyList