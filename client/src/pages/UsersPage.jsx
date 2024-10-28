import Search from '../icons/Search'
import Pen from '../icons/Pen'
import './UserPage.css'
import Arrow from '../icons/Arrow'
import { UserHeader } from '../components/UserHeader'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider'
import { FiltroActivo, FiltroCargo, FiltroNacionalidad, FiltroRol, FiltroSector, FiltroTipoRemu, FiltroTurno } from '../components/Filters'


export const UsersPage = () => {
  const {users, visibleFliters, setVisibleFliters, setUsers} = useContext(UserContext) 
  const [selectedOption, setSelectedOption] = useState('-1');
  const misFiltros = [
    <FiltroTipoRemu key={0}/>,
    <FiltroCargo key={1}/>,
    <FiltroSector key={2}/>,
    <FiltroTurno key={3}/>,
    <FiltroActivo key={4}/>,
    <FiltroNacionalidad key={5}/>,
    <FiltroRol key={6}/>
  ]

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
      const sortedUsers = [...users].sort((a,b)=> a.employeeNumber > b.employeeNumber)
      setUsers(sortedUsers)
      return
    }
    if(e.target.value == 1){
      const sortedUsers = [...users].sort((a, b) => new Date(b.dateJoined) - new Date(a.dateJoined));
      setUsers(sortedUsers)
      return
    }
    if(e.target.value == 2){
      const sortedUsers = [...users].sort((a, b) => new Date(a.dateJoined) - new Date(b.dateJoined));
      setUsers(sortedUsers)
      return
    }
    if(e.target.value == 3){
      const sortedUsers = [...users].sort((a,b)=> a.firstName.localeCompare(b.firstName))
      setUsers(sortedUsers)
      return
    }
    if(e.target.value == 4){
      const sortedUsers = [...users].sort((a,b)=> a.lastName.localeCompare(b.lastName))
      setUsers(sortedUsers)
      return
    }
    if(e.target.value == 5){
      const sortedUsers = [...users].sort((a,b)=> a.email.localeCompare(b.email))
      setUsers(sortedUsers)
      return
    }
  }

  return(
    <>
      <UserHeader count = {users.length}/>
      <section className="main-section">
        <form className="filter">
          <div className="selector">
            <div className="orden">
              <label htmlFor="orden">Ordenar por</label>
              <select id="orden" onChange={handleSort}>
                <option value="0">Número</option>
                <option value="1">Más recientes</option>
                <option value="2">Más antiguos</option>
                <option value="3">Nombre</option>
                <option value="4">Apellido</option>
                <option value="5">Correo electrónico</option>
              </select>
            </div>
            <div className="add-filtros">
              <div className="label">Agregar filtro +</div>
              <select className="selectFiltro" value={selectedOption} onChange={handleSelect}>
                <option value="0">Tipo de remuneración +</option>
                <option value="1">Cargo +</option>
                <option value="2">Sector +</option>
                <option value="3">Turno +</option>
                <option value="4">Activo +</option>
                <option value="5">Nacionalidad +</option>
                <option value="6">Rol +</option>
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