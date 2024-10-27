import { createContext, useEffect, useState } from "react";
const BASE_URL = "https://api.schneck.dlab.software/api/";
const TOKEN = "81bca52e6f48e169b4fd441e31859fa191853dd3";

// eslint-disable-next-line react-refresh/only-export-components
export const ReceiptsContext = createContext();

// eslint-disable-next-line react/prop-types
export function ReceiptsProvider({ children }) {
  const [receipts, setReceipts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [visibleFliters, setVisibleFliters] = useState([]);

  const getReceipts = () => {
    let textFilter = "";
    filter.length > 1
      ? (textFilter = filter.join("&"))
      : (textFilter = filter.join(""));
    fetch(`${BASE_URL}receipts/?${textFilter}`, {
      method: "GET", // Cambia el método si es POST, PUT, etc.
      headers: {
        Authorization: `Token ${TOKEN}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        const receipts = response.results;
        setReceipts(receipts);
      });
  };

  useEffect(() => {
    getReceipts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const addReceiptsFilter = (newFilter, remove) => {
    const newFilters = filter.filter((item) => { //Elimina instancias anteriores de filtrados
        const [word1] = item.split("=");         //del mismo tipo.
        return word1 != remove;
      })
    setFilter([...newFilters, newFilter]);
  };
  const removeReceiptsFilter = (remove) => {
    const newFilters = structuredClone(filter)
    const removed = newFilters.filter((item) => { //Elimina instancias anteriores de filtrados 
      const [word1] = item.split("=");            //del mismo tipo.
      return word1 != remove;
    })
    setFilter(removed)
  };

  return (
    <ReceiptsContext.Provider
      value={{
        receipts,
        setReceipts,
        getReceipts,
        setFilter,
        addReceiptsFilter,
        removeReceiptsFilter,
        visibleFliters,
        setVisibleFliters,
      }}
    >
      {children}
    </ReceiptsContext.Provider>
  );
}
