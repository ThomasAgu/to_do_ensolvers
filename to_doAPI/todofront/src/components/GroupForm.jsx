import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const GroupForm = ({setGroups, inputTextGroups, setInputTextGroups, change, setChange}) => {

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
            <div id='group-form'>
              <input
              type="text"
              id="input-group-form"
              value={inputTextGroups}
              onChange={inputTextHandle}
              placeholder="Add a new group..."
              />
              <button className="" type="submit"  id='group-form-btn' onClick={submitHandle}>
              <FontAwesomeIcon icon={faCirclePlus} id='group-form-btn-logo' />
              </button>
            </div>
        </form>
  )
}

export default GroupForm