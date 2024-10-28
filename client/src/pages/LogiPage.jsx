import { Link } from 'react-router-dom'
import logo from '../assets/dTalentLogo.png'
import './LoginPage.css'
import { useContext } from 'react'
import { LoginContext } from '../context/LoginProvider'

// eslint-disable-next-line react/prop-types
export const LoginPage = ({setIsAuthenticated})=>{
  const {error, getLogin} = useContext(LoginContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    getLogin(e.target.username.value, e.target.password.value, setIsAuthenticated)
  }

  return(
    <div className="main-login">
      <form className={error ? 'login-form error-form': 'login-form'} onSubmit={handleSubmit}>
        <img className='logo' src={logo} alt="Logo de dTalent" />
        <div>
          <fieldset>
            <legend>Nombre de usuario</legend>
            <input className='login-inp' type="text" name="username" id="username" placeholder='Nombre de usuario' />
          </fieldset>
          {error && <small className='error-login'>{error.username[0]}</small>}
        </div>
        <div>
          <fieldset>
            <legend>Contraseña</legend>
            <input className='login-inp' type="password" name="password" id="password" placeholder='Contraseña'/>
          </fieldset>
          {error && <small className='error-login'>{error.password[0]}</small>}
        </div>
        <input className='submit-btn login-inp' type="submit" value="INICIAR SESSIÓN" />
        <Link to='#'>Olvidaste tu contraseña?</Link>
      </form>
    </div>
  )
}