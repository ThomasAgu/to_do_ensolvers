import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faCaretSquareDown, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ToDoList from './TodoList';


const Group = ({id, name, setGroups, groups, group, change, setChange, inputText, setInputText, setActGroup, setActGroupName}) => {

    const baseURL = `http://127.0.0.1:8000/api/groups/`;
    const [changeTodo, setChangeTodo]= useState(0)
    const [todos, setTodos] = useState([]);

    const [isActivate, setIsActivate] = useState(false);
    useEffect(() => {
        openHandler()
    }, [changeTodo]);

    const openHandler = () =>{
        axios.get(baseURL+group.id).then((response) => {
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
        setActGroupName(group.name)
        setActGroup(group.id)
    }   
    return (
        <div>
            <div className="group">
            <div id='group-name' className='group-name'>{name} </div>
            <div id="group-buttons">
                <button className="group-btn" onClick={handleClickAdd}>
                    {" "}
                    <FontAwesomeIcon icon={faCirclePlus} />
                </button>
                <button className="group-btn" onClick={openHandler}>
                    {" "}
                    <FontAwesomeIcon icon={faCaretSquareDown} />
                </button>
                <button className="group-btn" onClick={deleteHandler}>
                    {" "}
                    <FontAwesomeIcon icon={faDeleteLeft} />
                </button>
                {!isActivate &&(<ToDoList todos={todos} setTodos={setTodos}  changeTodo={changeTodo}  setChangeTodo={setChangeTodo}/> )}
            
            </div>
        </div>
        </div>
    )
}

export default Group