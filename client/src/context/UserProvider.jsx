import {createContext, useEffect, useState } from "react";
const BASE_URL = 'https://api.schneck.dlab.software/api/'
const TOKEN = '81bca52e6f48e169b4fd441e31859fa191853dd3'

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();


// eslint-disable-next-line react/prop-types
export function UserProvider ({children}){
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState([])
  const [visibleFliters, setVisibleFliters] = useState([]);

  const getUsers = () => {
    let textFilter = "";
    filter.length > 1
      ? (textFilter = filter.join("&"))
      : (textFilter = filter.join(""));
    fetch(`${BASE_URL}users/?${textFilter}`,{
      method: 'GET', // Cambia el método si es POST, PUT, etc.
      headers: {
        'Authorization': `Token ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((response) => {
        const users = response.results;
        setUsers(users);
      });
  }

  useEffect(() => {
    getUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const addUsersFilter = (newFilter, remove) => {
    const newFilters = filter.filter((item) => { //Elimina instancias anteriores de filtrados
        const [word1] = item.split("=");         //del mismo tipo.
        return word1 != remove;
      })
    setFilter([...newFilters, newFilter]);
  };
  const removeUsersFilter = (remove) => {
    const newFilters = structuredClone(filter)
    const removed = newFilters.filter((item) => { //Elimina instancias anteriores de filtrados 
      const [word1] = item.split("=");            //del mismo tipo.
      return word1 != remove;
    })
    setFilter(removed)
  };

  return(
    <UserContext.Provider value={{
      users,
      setUsers,
      getUsers,
      setFilter,
      addUsersFilter,
      removeUsersFilter,
      visibleFliters,
      setVisibleFliters,
    }}>
      {children}
    </UserContext.Provider>
  )
}