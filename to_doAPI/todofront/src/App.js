import { useState } from 'react';
import './App.css';
import Form from "./components/FormTodo"
import ToDoList from './components/TodoList'
/* import NavVar from './components/NavVar'; */
import axios from 'axios'

function App() {
  //Use state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [isLogged, setIsLogged] = useState(false); 

  /* prueba axios */
  const baseURL = `http://127.0.0.1:8000/api/todos/`
  axios.get(baseURL).then((response)=>{
    console.log(response)
  })

  return (
    <div className="App">
     {/*  <NavVar isLogged={isLogged} setIsLogged={setIsLogged}/> */}
      <header className="App-header">
        <h1> To do list</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

