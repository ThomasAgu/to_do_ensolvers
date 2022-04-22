import React, {  useState } from 'react'
import Todo from './Todo'
import axios from "axios";

  const TodoList = ({todos, setTodos,  changeTodo,setChangeTodo}) => {
  const baseURL = `http://127.0.0.1:8000/api/todos/`;
  const [todoEdit, setToDoEdit] = useState("null");

  const handleChangeName = (e) =>{
    e.preventDefault();
    let actInfo = document.getElementById('inputAct').value
    console.log(actInfo)
    axios.put(baseURL+todoEdit.id, {info: actInfo, finished: todoEdit.finished}).then(res => {
      setChangeTodo(changeTodo+1)
    });
  }
  if (!todos) return null
  return (
    <div>
        
        {todos.map((todo) => (
          <Todo key={todo.id} info={todo.info} finished={todo.finised} setTodos={setTodos} todos={todos} todo={todo}  changeTodo={changeTodo}  setChangeTodo={setChangeTodo} todoEdit={todoEdit} setToDoEdit={setToDoEdit} />
        ))}

      <div>
          <input type="text" name="" placeholder={todoEdit.info} id="inputAct" />
          <button onClick={handleChangeName}>Edit</button>
        </div>
    </div>
  )
}

export default TodoList