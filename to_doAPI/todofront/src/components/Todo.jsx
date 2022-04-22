import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons'

const Todo = ({id, info, setTodos, todos, todo}) => {

    const deleteHandler = () =>{
      /* make and API DELETE */
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completeHandler = () =>{
      /* Make an API UPDATE */
      setTodos(todos.map((item) =>{
          if(item.id === todo.id){
            return{
              ...item, completed: !item.completed
            };
          }
          return item;
        })
      );
    }

    const editHandler = () =>{
      /* Make an API Update */
        console.log("probando")
    }
  return (
    <div>
        <div className="todo">
            <div className={`todo-item ${todo.completed ? "completed" : ''} `}> {info}</div>
            <div id='todo-buttons'>
              <input type="checkbox" className='todo-btn' name="" id="checkBox" onChange={completeHandler}/> 
              <button className='todo-btn' onClick={editHandler}> <FontAwesomeIcon  icon={faEdit}/></button>
              <button className='todo-btn' onClick={deleteHandler}> <FontAwesomeIcon  icon={faDeleteLeft}/></button>
            </div>
        </div>
    </div>
  )
}

export default Todo