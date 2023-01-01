import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
  
  const handleTodoClick = () => {
    // console.log(todo.id);
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label htmlFor="check">
        <input
          type="checkbox"
          id="check"
          checked={todo.completed}
          readOnly
          onChange={handleTodoClick} />
      </label>
      {todo.name}
    </div>
  )
}

export default Todo