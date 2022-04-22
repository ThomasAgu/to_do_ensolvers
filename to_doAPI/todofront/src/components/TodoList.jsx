import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos}) => {
  return (
    <div>
        {todos.map((todo) => (
          <Todo key={todo.id} info={todo.text} setTodos={setTodos} todos={todos} todo={todo} />
        ))}
    </div>
  )
}

export default TodoList