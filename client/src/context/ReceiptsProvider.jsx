import { createContext, useContext, useEffect, useState } from "react";
import { LoginContext } from "./LoginProvider";
const BASE_URL = "https://api.schneck.dlab.software/api/";

// eslint-disable-next-line react-refresh/only-export-components
export const ReceiptsContext = createContext();

// eslint-disable-next-line react/prop-types
export function ReceiptsProvider({ children }) {
  const [receipts, setReceipts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [visibleFliters, setVisibleFliters] = useState([]);
  const {token} = useContext(LoginContext)

  const getReceipts = () => {
    let textFilter = "";
    filter.length > 1
      ? (textFilter = filter.join("&"))
      : (textFilter = filter.join(""));
    fetch(`${BASE_URL}receipts/?${textFilter}`, {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
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
