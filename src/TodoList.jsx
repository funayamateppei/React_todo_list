import React from 'react';
import Todo from './Todo';

const TodoList = ({ todo, toggleTodo }) => {
  return (
    todo.map((x) => <Todo todo={x} key={x.id} toggleTodo={toggleTodo} />)
  )
}

export default TodoList;