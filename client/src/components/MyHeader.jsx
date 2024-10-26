import './MyHeader.css'

export const MyHeader = () => {
  return(
    <header className='myheader'>
      <div className='title'>
        <h2>Lista de empleados</h2>
        <div>
          <span>1</span>
        </div>
      </div>
      <div className='btns'>
        <button className='importar'>IMPORTAR</button>
        <button className='nuevo'>+ NUEVO EMPLEADO</button>
      </div>
    </header>
  )
}