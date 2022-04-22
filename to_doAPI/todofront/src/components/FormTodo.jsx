import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const FormTodo = ({ todos, setTodos, inputText, setInputText , change,setChange}) => {
  
  const baseURL = `http://127.0.0.1:8000/api/todos/`;
  
  const inputTextHandle = (e) => {
    setInputText(e.target.value);
  };

  const submitHandle = (e) => {
    /* make an API INSERT */
    e.preventDefault();
    if (inputText === "") {
      alert("The input can't be empty");
    } else {
      /* Agregar aca a la base de datos por medio de una API */
     /*  setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 10000 },
      ]); */

      axios.post(baseURL, {info: inputText, finished: false}).then(res => {
      })
      setChange(change+1)
      setInputText("");
    }
  };
  return (
    <form>
      <input
        type="text"
        className="todo-input"
        value={inputText}
        onChange={inputTextHandle}
      />
      <button className="todo-button" type="submit" onClick={submitHandle}>
        <FontAwesomeIcon icon={faCirclePlus} />
      </button>
    </form>
  );
};

export default FormTodo;
