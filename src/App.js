import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState([{
    id: 1,
    name: 'todo1',
    completed: false
  }]);

  const todoNameRef = useRef();

  const addTodo = () => {
    // タスクを追加
    // console.log(todoNameRef.current.value);
    const text = todoNameRef.current.value;
    setTodo((prevTodo) => {
      return [...prevTodo, {
        id: uuidv4(),
        name: text,
        completed: false
      }]
    })
    todoNameRef.current.value = null;
  }

  return (
    <>
      <TodoList todo={todo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={addTodo}>タスクを追加</button>
      <button>完了したタスクを削除</button>
      <div>残りのタスク：０</div>
    </>
  )
}

export default App;