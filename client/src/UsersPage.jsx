

export const UsersPage = () => {
  return(
    <section>
      <div>
        <div>
          <label htmlFor="filtro">Ordenar por</label>
          <section id='filtro'>
            <option value="Numer">Numero</option>
          </section>
          <button>agregar filtro +</button>
        </div>
        <input type="text" name="busqueda" id="busqueda" placeholder='Buscar empleado' />
      </div>
      <table></table>
      <div>
        <p>selector</p>
      </div>
    </section>
  )
}