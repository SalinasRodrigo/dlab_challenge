import Search from '../icons/Search'
import Pen from '../icons/Pen'
import './UserPage.css'
import Arrow from '../icons/Arrow'
import { MyHeader } from '../components/MyHeader'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider'
import { FiltroActivo, FiltroCargo, FiltroNacionalidad, FiltroRol, FiltroSector, FiltroTipoRemu, FiltroTurno } from '../components/Filters'

export const UsersPage = () => {
  const {users, visibleFliters, setVisibleFliters, } = useContext(UserContext) 
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

  return(
    <>
      <MyHeader count = {users.length}/>
      <section className="main-section">
        <form className="filter">
          <div className="selector">
            <div className="orden">
              <label htmlFor="orden">Ordenar por</label>
              <select id="orden">
                <option value="Numer">Numero</option>
                <option value="Numer">Numero</option>
                <option value="Numer">Numero</option>
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