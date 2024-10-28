import { useContext } from 'react';
import { ReceiptsContext } from '../context/ReceiptsProvider';
import Refresh from '../icons/Refresh'
import './MyHeader.css'

// eslint-disable-next-line react/prop-types
export const ReceiptsHeader = ({count}) => {
  const { getReceipts } = useContext(ReceiptsContext);
  return(
    <header className='myheader'>
      <div className='title'>
        <h2>Lista de Recibos</h2>
        <div>
          <span>{count}</span>
        </div>
      </div>
      <div className='btns'>
        <button className='nuevo' onClick={getReceipts}><Refresh/><span>REFRESCAR LISTA DE RECIBOS</span></button>
      </div>
    </header>
  )
}