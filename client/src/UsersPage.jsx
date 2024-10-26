import Search from './icons/Search'
import Pen from './icons/Pen'
import './UserPage.css'
import Arrow from './icons/Arrow'

export const UsersPage = () => {
  return(
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
            <th></th>
            <th>Número</th>
            <th>Nombre</th>
            <th>Correo electrónico</th>
            <th>Teléfono/Celular</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div className='profile-picture' >DD</div></td>
            <td>#1</td>
            <td>dLabDemo</td>
            <td>demo@dlab.sofware</td>
            <td></td>
            <td><span className='estado'>Activo</span></td>
            <td><button className='edit'><Pen/></button></td>
          </tr>
          <tr>
            <td><div className='profile-picture' >DD</div></td>
            <td>#1</td>
            <td>dLabDemo</td>
            <td>demo@dlab.sofware</td>
            <td></td>
            <td><span className='estado'>Activo</span></td>
            <td><button className='edit'><Pen/></button></td>
          </tr>
        </tbody>
      </table>
      <div className='pages'>
        <span className='right'><Arrow/></span>
        <span className='page'>1</span>
        <span className='left'><Arrow/></span>
      </div>
    </section>
  )
}