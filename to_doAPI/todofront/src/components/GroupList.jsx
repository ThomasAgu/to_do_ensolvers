import React, { useState } from 'react'
import Group from './Group';
import FormTodo from './FormTodo';

const GroupList = ({groups, setGroups, change, setChange}) => {
    const [inputText, setInputText] = useState("");
    const [actGroup, setActGroup] = useState(null);
    const [actGroupName,setActGroupName] = useState("");
    const [todos, setTodos] = useState(null)

    const [changeTodo, setChangeTodo]= useState(0)
    
    if (!groups) return (
        <div id='groups-empty'>Add a group to start</div>
    )
    return (
        <div>
            {groups.map((group) =>(
                <Group key={group.id} name={group.name} groups={groups} setGroups={setGroups} group={group} change={change}  setChange={setChange} inputText={inputText} setInputText={setInputText} setActGroup={setActGroup} setActGroupName={setActGroupName} changeTodo={changeTodo} setChangeTodo={setChangeTodo}/>
            ))}
            <div>
                <FormTodo todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}  actGroup={actGroup} actGroupName={actGroupName} setActGroupName={setActGroupName}  />
            </div>
        </div>
  )
}

export default GroupList