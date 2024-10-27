import Search from "../icons/Search";
import "./UserPage.css";
import "./ReceiptsPage.css"
import { MyHeader } from "../components/MyHeader";
import Arrow from "../icons/Arrow";
import { ReceiptsContext } from "../context/ReceiptsProvider";
import { useContext, useState } from "react";
import Check from "../icons/Check";
import UnCheck from "../icons/UnCheck";
import { FiltroAño, FiltroEnviado, FiltroLeido, FiltroMes, FiltroTipo } from "../components/Filters";

export const ReceiptsPage = () => {
  const { receipts, visibleFliters, setVisibleFliters, setReceipts } = useContext(ReceiptsContext);
  const [selectedOption, setSelectedOption] = useState('-1');
  const misFiltros = [
    <FiltroTipo key={0}/>,
    <FiltroAño key={1}/>,
    <FiltroMes key={2}/>,
    <FiltroEnviado key={3}/>,
    <FiltroLeido key={4}/>
  ]

  const getTime = (date) => {
    const formatDate = new Date(date)
    const hoy = new Date()
    let time = hoy - formatDate
    const segundos = Math.floor(time / 1000);
    if(segundos<=0)return'Justo ahora'
    const minutos = Math.floor(segundos / 60);
    if(minutos<=0)return`Hace ${segundos} segundo/s`
    const horas = Math.floor(minutos / 60);
    if(horas<=0)return`Hace ${minutos} minuto/s`
    const dias = Math.floor(horas / 24);
    if(dias<=0)return`Hace ${horas} hora/s`
    const meses = Math.floor(dias / 30);
    if(meses<=0)return`Hace ${dias} dia/s`
    const años = Math.floor(meses / 12)
    if(años<=0)return`Hace ${meses} mese/s`
    return `Hace ${años} año/s`
  }

  const handleSelect = (e) => {
    if(e.target.value == -1){
      setSelectedOption(e.target.value)
      setVisibleFliters([])
      return
    }
    if(visibleFliters.includes(e.target.value)) return
    const newVisibleFliters = [
      ...visibleFliters,
      e.target.value,
    ]
    setVisibleFliters(newVisibleFliters)
    setSelectedOption(e.target.value)
  }

  const handleSort = (e) => {
    if(e.target.value == 0){
      const sortedReceipts = [...receipts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setReceipts(sortedReceipts)
      return
    }
    if(e.target.value == 1){
      const sortedReceipts = [...receipts].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      setReceipts(sortedReceipts)
      return
    }
    if(e.target.value == 2){
      const sortedReceipts = [...receipts].sort((a,b)=> a.type.localeCompare(b.type))
      setReceipts(sortedReceipts)
      return
    }
  }

  return (
    <>
      <MyHeader count={receipts.length}/>
      <section className="main-section">
        <form className="filter">
          <div className="selector">
            <div className="orden">
              <label htmlFor="orden">Ordenar por</label>
              <select id="orden" onChange={handleSort}>
                <option value="0">Más Recientes</option>
                <option value="1">Más antiguos</option>
                <option value="2">Tipo</option>
              </select>
            </div>
            <div className="add-filtros">
              <div className="label">Agregar filtro +</div>
              <select className="selectFiltro" value={selectedOption} onChange={handleSelect}>
                <option value="0">Tipo de remuneración +</option>
                <option value="1">Año +</option>
                <option value="2">Mes +</option>
                <option value="3">Enviado +</option>
                <option value="4">Leido +</option>
                <option value="-1">Limpiar filtros</option>
              </select>
            </div>
          </div>
          <div className="search-inp">
            <input
              type="text"
              name="busqueda"
              id="busqueda"
              placeholder="Buscar empleado"
            />
            <Search />
          </div>
        </form>

        <div className="filtros">  
          {visibleFliters.length>0 ? visibleFliters.map((filtro, index)=>(
            <div key={index}>
              {misFiltros[filtro]}
            </div>
          )) : <></>}
        </div>

        <table className="content-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Empleado</th>
              <th>Fecha</th>
              <th>Enviado</th>
              <th>Leido</th>
              <th>Firmado</th>
            </tr>
          </thead>
          <tbody>
            {receipts.length > 0 ? (
              receipts.map((receipt) => (
                <tr key={receipt.id}>
                  <td>
                    <div className="tipo">{receipt.type}</div>
                  </td>
                  <td>{`${receipt.employeeFullName}#${receipt.employeeNumber}`}</td>
                  <td>{receipt.fullDate}</td>
                  <td>
                    {receipt.isSended ? (
                      <div className="estado-receipts">
                        <span><Check/></span>
                        <span>{getTime(receipt.sendedDate)}</span>
                      </div>
                    ) : (
                      <span className="uncheck" ><UnCheck/></span>
                    )}
                  </td>
                  <td>
                    {receipt.isReaded ? (
                      <div className="estado-receipts">
                        <span><Check/></span>
                        <span>{getTime(receipt.readedDate)}</span>
                      </div>
                    ) : (
                      <span className="uncheck"><UnCheck/></span>
                    )}
                  </td>
                  <td>
                    {receipt.isSigned ? (
                      <div>
                        <span className="estado-receipts"><Check/></span>
                        <span>{getTime(receipt.signedDate)}</span>
                      </div>
                    ) : (
                      <span className="uncheck"><UnCheck/></span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
        <div className="pages">
          <button className="right">
            <Arrow />
          </button>
          <span className="page">1</span>
          <button className="left">
            <Arrow />
          </button>
        </div>
      </section>
    </>
  );
};
