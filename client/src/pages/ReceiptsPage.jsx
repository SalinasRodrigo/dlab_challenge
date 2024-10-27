import Search from "../icons/Search";
import "./UserPage.css";
import "./ReceiptsPage.css"
import { MyHeader } from "../components/MyHeader";
import Arrow from "../icons/Arrow";
import { ReceiptsContext } from "../context/ReceiptsProvider";
import { useContext } from "react";
import Check from "../icons/Check";
import UnCheck from "../icons/UnCheck";

export const ReceiptsPage = () => {
  const { receipts } = useContext(ReceiptsContext);

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

  return (
    <>
      <MyHeader />
      <section className="main-section">
        <form className="filter">
          <div className="selector">
            <div className="filtro">
              <label htmlFor="filtro">Ordenar por</label>
              <select id="filtro">
                <option value="Numer">Numero</option>
                <option value="Numer">Numero</option>
                <option value="Numer">Numero</option>
              </select>
            </div>
            <button className="add-btn">Agregar filtro +</button>
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
