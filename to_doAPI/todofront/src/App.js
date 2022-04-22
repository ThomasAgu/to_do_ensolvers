import { useEffect, useState } from 'react';
import './App.css';
import Form from "./components/FormTodo"
import ToDoList from './components/TodoList'
import axios from "axios"
/* import NavVar from './components/NavVar'; */



function App() {

  const baseURL= `http://127.0.0.1:8000/api/todos/`;
  //Use state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [change, setChange]= useState(0)
  //useEffecT
  useEffect(() => {
      axios.get(baseURL).then((response) => {
        setTodos(response.data.todos);
    });
  }, [change]);


  return (
    <div className="App">
     {/*  <NavVar isLogged={isLogged} setIsLogged={setIsLogged}/> */}
      <header className="App-header">
        <h1> To do list</h1>
      </header>
      <Form todos={todos} setTodos={setTodos}inputText={inputText} setInputText={setInputText}  change={change}  setChange={setChange} />
      <ToDoList todos={todos} setTodos={setTodos}  change={change}  setChange={setChange}/>
    </div>
  );
}

export default App;

