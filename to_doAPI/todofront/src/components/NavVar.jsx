import React from 'react'
import axios from 'axios'

const NavVar = ({isLogged, setIsLogged}) => {

const handleClick = () =>{
    const baseURL = `http://127.0.0.1:8000/api/user/`
  axios.post(baseURL).then((response)=>{
    console.log(response)
  })
    setIsLogged(true)
}

const handleClickLogOut = () => {
    setIsLogged(false)
}


    if (!isLogged) return (
        <div>
            Log as guest!
            <input type="text" name="" id="username" placeholder='username' />
            <input type="pass" name="" id="pass" placeholder='password' />
            <button onClick={handleClick}> Log in</button>
        </div>
    )
    else return (
        <div>
            <h3> hacer consulta a API y mostrar los datos</h3>
            <button onClick={handleClickLogOut}> Log out</button>
        </div>
  )
}

export default NavVar