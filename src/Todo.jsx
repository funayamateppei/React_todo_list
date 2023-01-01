import React from 'react'

const Todo = ({todo}) => {
  return (
    <div>
      <label htmlFor="check">
        <input type="checkbox" id="check" checked={todo.completed} readOnly />
      </label>
      {todo.name}
    </div>
  )
}

export default Todo