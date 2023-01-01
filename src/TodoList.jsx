import React from 'react';
import Todo from './Todo';

const TodoList = ({ todo }) => {
  return (
    todo.map((x) => <Todo todo={x} key={x.id} />)
  )
}

export default TodoList;