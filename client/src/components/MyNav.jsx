import { Link } from 'react-router-dom'
import logo from '../assets/dTalentLogo.png'
import GearIcon from '../icons/Gear'
import InboxIcon from '../icons/Inbox'
import PaperIcon from '../icons/Paper'
import { PeopleIcon } from '../icons/People'
import './MyNav.css'
import { LoginContext } from '../context/LoginProvider'
import { useContext } from 'react'

export const MyNav = () => {
  const {login} = useContext(LoginContext)
  return(
    <aside className='nav-bar'>
      <div className='top-nav'>
        <header>
          <img className='logo' src={logo} alt="Logo de dTalent" />
        </header>
        <section>
          <ul>
            <li><Link to="/users"><PeopleIcon/><span>Empleados</span></Link></li>
            <li><Link to="/receipts"><PaperIcon/><span>Recibos</span></Link></li>
            <li><Link to="#"><InboxIcon/><span>Comunicados</span></Link></li>
            <li><Link to="#"><GearIcon/><span>Configuracion</span></Link></li>
          </ul>
        </section>
      </div>
      <footer>
        <div className='profile'>
          <div className='profile-picture' >{login?.initials}</div>
          <div className='footer-usuario'>
            <small>Bienvenido</small>
            <b>{login?.username}</b>
          </div>
        </div>
        <span className='trespuntos'></span>
      </footer>
    </aside>
  )
}