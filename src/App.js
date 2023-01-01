import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState([]);

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

  const toggleTodo = (value) => {
    const newTodos = [ ...todo ];
    // console.log(newTodos);
    // console.log(value);
    const sTodo = newTodos.find((x) => x.id === value);
    // console.log(sTodo);
    sTodo.completed = !sTodo.completed;
    setTodo(newTodos);
  }

  return (
    <>
      <TodoList todo={todo} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={addTodo}>タスクを追加</button>
      <button>完了したタスクを削除</button>
      <div>残りのタスク：０</div>
    </>
  )
}

export default App;