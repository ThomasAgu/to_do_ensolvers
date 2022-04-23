import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const FormTodo = ({ todos, setTodos, inputText, setInputText, actGroup, actGroupName, setActGroupName}) => {
  
  const baseURL = `http://127.0.0.1:8000/api/todos/`;
  
  const inputTextHandle = (e) => {
    setInputText(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (inputText === "") {
      alert("The input can't be empty");
    } else {


      axios.post(baseURL, {info: inputText, finished: false, group:actGroup}).then(res => {
      })
     setInputText("");
     setActGroupName("");
    }
  };
  if (actGroupName==="")return null
  return (
    <div id="form-todo">
      <form>
        <h5 id="title-form-todo">Add to the group: {actGroupName}</h5>
        <input
          type="text"
          className="todo-input"
          id="todo-input"
          value={inputText}
          maxLength={20}
          onChange={inputTextHandle}
        />
        
        <button className="todo-button" type="submit" onClick={submitHandle}>
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
      </form>
    </div>
  );
};

export default FormTodo;
