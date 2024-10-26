import logo from '../assets/dTalentLogo.png'
import GearIcon from '../icons/Gear'
import InboxIcon from '../icons/Inbox'
import PaperIcon from '../icons/Paper'
import { PeopleIcon } from '../icons/People'
import './MyNav.css'

export const MyNav = () => {
  return(
    <aside className='nav-bar'>
      <div className='top-nav'>
        <header>
          <img className='logo' src={logo} alt="Logo de dTalent" />
        </header>
        <section>
          <ul>
            <li><a href="#"><PeopleIcon/><span>Empleados</span></a></li>
            <li><a href="#"><PaperIcon/><span>Recibos</span></a></li>
            <li><a href="#"><InboxIcon/><span>Comunicados</span></a></li>
            <li><a href="#"><GearIcon/><span>Configuracion</span></a></li>
          </ul>
        </section>
      </div>
      <footer>
        <div className='profile'>
          <div className='profile-picture' >DD</div>
          <div className='footer-usuario'>
            <small>Bienvenido</small>
            <b>nombre</b>
          </div>
        </div>
        <span className='trespuntos'></span>
      </footer>
    </aside>
  )
}