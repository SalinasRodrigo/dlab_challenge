import Search from '../icons/Search'
import './UserPage.css'
import { MyHeader } from '../components/MyHeader'
import Arrow from '../icons/Arrow'

export const ReceiptsPage = () => {


  return(
    <>
      <MyHeader/>
      <section className='main-section'>
        <form className='filter'>
          <div className='selector'>
            <div className='filtro'>
              <label htmlFor="filtro">Ordenar por</label>
              <select  id='filtro'>
                <option value="Numer">Numero</option>
                <option value="Numer">Numero</option>
                <option value="Numer">Numero</option>
              </select>
            </div>
            <button className='add-btn'>Agregar filtro +</button>
          </div>
          <div className='search-inp'>
            <input type="text" name="busqueda" id="busqueda" placeholder='Buscar empleado' />
            <Search/>
          </div>
        </form>
        <table className='content-table'>
          <thead >
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
            <tr>
              <td><div className='tipo' >LiqMensual</div></td>
              <td>dLabDemo #1</td>
              <td>01/01/2024</td>
              <td><span className='estado'>check</span></td>
              <td><span className='estado'>check</span></td>
              <td><span className='estado'>uncheck</span></td>
            </tr>
            <tr>
              <td><div className='tipo' >LiqMensual</div></td>
              <td>dLabDemo #1</td>
              <td>01/01/2024</td>
              <td><span className='estado'>check</span></td>
              <td><span className='estado'>check</span></td>
              <td><span className='estado'>uncheck</span></td>
            </tr>
          </tbody>
        </table>
        <div className='pages'>
          <span className='right'><Arrow/></span>
          <span className='page'>1</span>
          <span className='left'><Arrow/></span>
        </div>
      </section>
    </>
  )
}