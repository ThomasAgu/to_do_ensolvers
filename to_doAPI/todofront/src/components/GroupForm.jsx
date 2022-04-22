import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const GroupForm = ({groups, setGroups, inputTextGroups, setInputTextGroups, change, setChange}) => {

    const baseURL = `http://127.0.0.1:8000/api/groups/`;
    
    const inputTextHandle = (e) => {
        setInputTextGroups(e.target.value);
      };

      const submitHandle = (e) => {
        e.preventDefault();
        if (inputTextGroups === "") {
          alert("The input can't be empty");
        } else {
    
    
          axios.post(baseURL, {name: inputTextGroups}).then(res => {
          })
          setChange(change+1)
          setInputTextGroups("");
        }
      };
    return (
        <form>
            <input
            type="text"
            className="todo-input"
            value={inputTextGroups}
            onChange={inputTextHandle}
            />
            <button className="todo-button" type="submit" onClick={submitHandle}>
            <FontAwesomeIcon icon={faCirclePlus} />
            </button>
        </form>
  )
}

export default GroupForm