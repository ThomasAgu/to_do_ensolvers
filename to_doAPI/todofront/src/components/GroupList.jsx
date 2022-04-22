import React, { useState } from 'react'
import axios from "axios";
import Group from './Group';
import {faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormTodo from './FormTodo';

const GroupList = ({groups, setGroups, change, setChange}) => {
    const [inputText, setInputText] = useState("0");
    const [actGroup, setActGroup] = useState(null);
    const [todos, setTodos] = useState(null)
    const baseURL = `http://127.0.0.1:8000/api/groups/`;


    if (!groups) return null
    return (
        <div>
            {groups.map((group) =>(
                <Group key={group.id} name={group.name} groups={groups} setGroups={setGroups} group={group} change={change}  setChange={setChange} inputText={inputText} setInputText={setInputText} setActGroup={setActGroup} />
            ))}
            <div>
                <FormTodo todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}  actGroup={actGroup}/* change={change}  setChange={setChange */  />

            </div>
        </div>
  )
}

export default GroupList