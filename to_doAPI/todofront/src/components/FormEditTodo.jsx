import React from 'react'
import axios from 'axios';

const FormEditTodo = ({todoEdit,setToDoEdit, changeTodo,setChangeTodo}) => {
    const baseURL=`http://127.0.0.1:8000/api/todos/`;
    const handleChangeName = (e) =>{
        e.preventDefault();
        let actInfo = document.getElementById('inputAct').value
        if (actInfo ===""){
          alert("The Todo Input can't be empty")
        }
        else{
        axios.put(baseURL+todoEdit.id, {info: actInfo, finished: todoEdit.finished}).then(res => {
            setToDoEdit(null)
          setChangeTodo(changeTodo+1)
        });
      }
      }

    if (!todoEdit) return (
      <br/>
    )
    return (
    <div>
        <div id='form-edit-todo'>
          <input type="text" name="" required  maxLength={20} placeholder={todoEdit.info} id="inputAct" />
          <button id='buttonAct'  onClick={handleChangeName}>Edit</button>
        </div>
    </div>
  )
}


export default FormEditTodo