import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import GroupForm from './components/GroupForm';
import GroupList from './components/GroupList';
/* import NavVar from './components/NavVar'; */



function App() {

  const baseURL= `http://127.0.0.1:8000/api/groups/`;
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
      <header className="App-header"><h1> To do list</h1></header>
      <GroupForm setGroups={setGroups} inputTextGroups={inputTextGroups} setInputTextGroups={setInputTextGroups} change={change}  setChange={setChange}/>
      <GroupList groups={groups} setGroups={setGroups} change={change}  setChange={setChange}/>
    </div>
  );
}

export default App;

