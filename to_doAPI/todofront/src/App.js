import { useEffect, useState } from 'react';
import './App.css';
import Form from "./components/FormTodo"
import ToDoList from './components/TodoList'
import axios from "axios"
import GroupForm from './components/GroupForm';
import GroupList from './components/GroupList';
/* import NavVar from './components/NavVar'; */



function App() {

  //const baseURL= `http://127.0.0.1:8000/api/todos/`;
  const baseURL= `http://127.0.0.1:8000/api/groups/`;
  //Use state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  /* const [change, setChange]= useState(0) */

  /* groups useState */
  const [groups, setGroups] = useState([]);
  const [inputTextGroups, setInputTextGroups ] = useState("");
  const [change, setChange]= useState(0)

  //useEffecT
  useEffect(() => {
      axios.get(baseURL).then((response) => {
        setGroups(response.data.groups);
    });
  }, [change]);


  return (
    <div className="App">
     {/*  <NavVar isLogged={isLogged} setIsLogged={setIsLogged}/> */}
      <header className="App-header">
        <h1> To do list</h1>
      </header>
      <GroupForm groups={groups} setGroups={setGroups} inputTextGroups={inputTextGroups} setInputTextGroups={setInputTextGroups} change={change}  setChange={setChange}/>
      <GroupList groups={groups} setGroups={setGroups} change={change}  setChange={setChange}/>
      {/* <Form todos={todos} setTodos={setTodos}inputText={inputText} setInputText={setInputText}  change={change}  setChange={setChange} />
      <ToDoList todos={todos} setTodos={setTodos}  change={change}  setChange={setChange}/> */}
    </div>
  );
}

export default App;

