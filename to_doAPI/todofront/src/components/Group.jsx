import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faCaretSquareDown, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ToDoList from './TodoList';


const Group = ({id, name, setGroups, groups, group, change, setChange, inputText, setInputText, setActGroup}) => {

    const baseURL = `http://127.0.0.1:8000/api/groups/`;
    const [changeTodo, setChangeTodo]= useState(0)
    const [todos, setTodos] = useState([]);

    const [isActivate, setIsActivate] = useState(false);
    useEffect(() => {
        openHandler()
    }, [changeTodo]);

    const openHandler = () =>{
        axios.get(baseURL+group.id).then((response) => {
            /* setGroups(response.data.groups); */
            console.log(response.data.todos)
            setTodos(response.data.todos);
        });
        setIsActivate(!isActivate)
    }
    const deleteHandler = () => {

        axios.delete(baseURL+group.id).then(res => {
          setChange(change+1)
          console.log(res);
          console.log(res.data);
        })
      };

    const handleClickAdd = () =>{
        setInputText(group.name)
        setActGroup(group.id)
    }   
    return (
        <div>
            <div className="todo">
            <div >{name} </div>
            <div id="todo-buttons">
                <button className="todo-btn" onClick={handleClickAdd}>
                    {" "}
                    <FontAwesomeIcon icon={faCirclePlus} />
                </button>
                <button className="todo-btn" onClick={openHandler}>
                    {" "}
                    <FontAwesomeIcon icon={faCaretSquareDown} />
                </button>
                <button className="todo-btn" onClick={deleteHandler}>
                    {" "}
                    <FontAwesomeIcon icon={faDeleteLeft} />
                </button>
                {isActivate &&(<ToDoList todos={todos} setTodos={setTodos}  changeTodo={changeTodo}  setChangeTodo={setChangeTodo}/> )}
            
            </div>
        </div>
        </div>
    )
}

export default Group