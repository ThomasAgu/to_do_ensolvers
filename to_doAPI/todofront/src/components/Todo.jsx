import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Todo = ({ id, info, finished, setTodos, todos, todo , changeTodo,  setChangeTodo, todoEdit, setToDoEdit}) => {
  const baseURL = `http://127.0.0.1:8000/api/todos/`;
  
  const deleteHandler = () => {

    axios.delete(baseURL+todo.id).then(res => {
      setChangeTodo(changeTodo+1)
    })
  };

  const completeHandler = () => {
    let value = (document.getElementById(`checkBox${todo.id}`).checked)
    axios.put(baseURL+todo.id, {info: info, finished: value}).then(res => {
      setChangeTodo(changeTodo+1)

    });
  };
/* Edit */
  const editHandler = () => {
    let value = (document.getElementById(`checkBox${todo.id}`).checked)
    setToDoEdit({info: todo.info, id: todo.id, finished: value})

  };
  return (
    <div>
      <div className="todo">
        <div id="todo-info" className={`todo-info ${todo.finished ? "completed" : ''} `} >{info} </div>
        <div id="todo-buttons">
        
        <input
            type="checkbox"
            className="checkbox-btn"
            name=""
            id={`checkBox${todo.id}`}
            checked={todo.finished}
            onChange={completeHandler}
          />
          <button className="todo-btn" onClick={editHandler}>
            {" "}
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button className="todo-btn" onClick={deleteHandler}>
            {" "}
            <FontAwesomeIcon icon={faDeleteLeft} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
