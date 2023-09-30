import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import TodoEmptyList from './TodoEmptyList'
import { Typography } from '@mui/material'

function Todo() {

  const todosStore = useSelector(state => state.todoStore.todos)


  return (
    <>
      {
        todosStore.length === 0
          ?
          <TodoEmptyList />
          :
          <>
            <ul>{todosStore.map(todo => <TodoItem key={todo.id} {...todo} />)}</ul>
            <Typography sx={{ fontSize: 30, color: '#6c6c6c', textAlign: 'center' }} level="h2">All Task: {todosStore.length}</Typography>
          </>
      }
    </>
  )
}

export default Todo