import {createContext, useEffect, useState } from "react";
const BASE_URL = 'https://api.schneck.dlab.software/api/'
const TOKEN = '81bca52e6f48e169b4fd441e31859fa191853dd3'

export const UserContext = createContext();


// eslint-disable-next-line react/prop-types
export function UserProvider ({children}){
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState('')

  const getUsers = () => {
    fetch(`${BASE_URL}users/?${filter}`,{
      method: 'GET', // Cambia el método si es POST, PUT, etc.
      headers: {
        'Authorization': `Token ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((response) => {
        const users = response.results;
        console.log(users)
        setUsers(users);
      });
  }

  useEffect(() => {
    getUsers()
    console.log(users)
  }, []);

  return(
    <UserContext.Provider value={{
      users,
      setUsers,
      getUsers,
      setFilter
    }}>
      {children}
    </UserContext.Provider>
  )
}