import Search from '../icons/Search'
import Pen from '../icons/Pen'
import './UserPage.css'
import Arrow from '../icons/Arrow'
import { MyHeader } from '../components/MyHeader'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

export const UsersPage = () => {

  const {users} = useContext(UserContext) 

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
            {users.length > 0 ? users.map((user)=>(
              <tr key={user.id}>
                <td><div className='profile-picture' >{user.initials}</div></td>
                <td>#{user.employeeNumber}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.isActive ? <span className='estado activo'>Activo</span> : <span className='estado-inactivo'>Activo</span>}</td>
                <td><button className='edit'><Pen/></button></td>
              </tr>
            )) : <></>}
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
  )
}