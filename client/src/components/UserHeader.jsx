import './MyHeader.css'

// eslint-disable-next-line react/prop-types
export const UserHeader = ({count}) => {
  return(
    <header className='myheader'>
      <div className='title'>
        <h2>Lista de empleados</h2>
        <div>
          <span>{count}</span>
        </div>
      </div>
      <div className='btns'>
        <button className='importar'>IMPORTAR</button>
        <button className='nuevo'>+ NUEVO EMPLEADO</button>
      </div>
    </header>
  )
}