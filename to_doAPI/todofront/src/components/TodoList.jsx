import React, {  useState } from 'react'
import Todo from './Todo'
import FormEditTodo from './FormEditTodo';

  const TodoList = ({todos, setTodos,  changeTodo,setChangeTodo}) => {
  const [todoEdit, setToDoEdit] = useState(null);

  if (todos.length===0) return (
      <div id='groups-empty'>Group Empty...</div> 
  )
  return (
    
    <div>
        
        {todos.map((todo) => (
          <Todo key={todo.id} info={todo.info} finished={todo.finised} setTodos={setTodos} todos={todos} todo={todo}  changeTodo={changeTodo}  setChangeTodo={setChangeTodo} todoEdit={todoEdit} setToDoEdit={setToDoEdit} />
        ))}
        <FormEditTodo todoEdit={todoEdit} setToDoEdit={setToDoEdit} changeTodo={changeTodo} setChangeTodo={setChangeTodo}/>
    </div>
  )
}

export default TodoList