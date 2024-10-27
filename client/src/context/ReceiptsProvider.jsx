import {createContext, useEffect, useState } from "react";
const BASE_URL = 'https://api.schneck.dlab.software/api/'
const TOKEN = '81bca52e6f48e169b4fd441e31859fa191853dd3'

export const ReceiptsContext = createContext();


// eslint-disable-next-line react/prop-types
export function ReceiptsProvider ({children}){
  const [receipts, setReceipts] = useState([])
  const [filter, setFilter] = useState('')

  const getReceipts = () => {
    fetch(`${BASE_URL}receipts/?${filter}`,{
      method: 'GET', // Cambia el método si es POST, PUT, etc.
      headers: {
        'Authorization': `Token ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((response) => {
        const receipts = response.results;
        console.log(receipts)
        setReceipts(receipts);
      });
  }

  useEffect(() => {
    getReceipts()
  }, [filter]);

  return(
    <ReceiptsContext.Provider value={{
      receipts,
      setReceipts,
      getReceipts,
      setFilter
    }}>
      {children}
    </ReceiptsContext.Provider>
  )
}