import { useContext, useState } from "react";
import { ReceiptsContext } from "../context/ReceiptsProvider";
import { UserContext } from "../context/UserProvider";


export const FiltroTipo = () => {
  const { addReceiptsFilter, removeReceiptsFilter, setVisibleFliters} = useContext(ReceiptsContext);
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (e, index)=>{
    setSelectedOption(e.target.value)
    if (e.target.value !== "0"){
      const newFiltro = `${e.target.id}=${e.target.value}`
      addReceiptsFilter(newFiltro, e.target.id)
    }else{
      removeReceiptsFilter(e.target.id)
      setVisibleFliters((prevState) =>prevState.filter((item) => item != index))
    }
  }

  return(
    <>
      <div >Tipo</div>
      <select  id="type" value={selectedOption} onChange={(e) => handleChange(e, 0)}>
        <option value="LiqMensual">Liquidación mensual</option>
        <option value="Jornal">Jornal</option>
        <option value="">Todos</option>
        <option value="0">Remover filtro</option>
      </select>
    </>
  )
} 

// eslint-disable-next-line react-refresh/only-export-components
export const FiltroAño = () => {
  const { addReceiptsFilter, removeReceiptsFilter, setVisibleFliters} = useContext(ReceiptsContext);
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (e, index)=>{
    setSelectedOption(e.target.value)
    if (e.target.value !== "0"){
      const newFiltro = `${e.target.id}=${e.target.value}`
      addReceiptsFilter(newFiltro, e.target.id)
    }else{
      removeReceiptsFilter(e.target.id)
      setVisibleFliters((prevState) =>prevState.filter((item) => item != index))
    }
  }

  return(
    <>
      <div >Año</div>
      <select  id="year" value={selectedOption} onChange={(e) => handleChange(e, 1)}>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value=""  >Todos</option>
        <option value="0">Remover filtro</option>
      </select>
    </>
  )
}

export const FiltroMes = () => {
  const { addReceiptsFilter, removeReceiptsFilter, setVisibleFliters} = useContext(ReceiptsContext);
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (e, index)=>{
    setSelectedOption(e.target.value)
    if (e.target.value !== "0"){
      const newFiltro = `${e.target.id}=${e.target.value}`
      addReceiptsFilter(newFiltro, e.target.id)
    }else{
      removeReceiptsFilter(e.target.id)
      setVisibleFliters((prevState) =>prevState.filter((item) => item != index))
    }
  }

  return(
    <>
      <div >Mes</div>
      <select  id="month" value={selectedOption} onChange={(e) => handleChange(e, 2)}>
        <option value="1">Enero</option>
        <option value="2">Febrero</option>
        <option value="3">Marzo</option>
        <option value="4">Abril</option>
        <option value="5">Mayo</option>
        <option value="6">Junio</option>
        <option value="7">Julio</option>
        <option value="8">Agosto</option>
        <option value="9">Septiembre</option>
        <option value="10">Octubre</option>
        <option value="11">Noviembre</option>
        <option value="12">Diciembre</option>
        <option value=""  >Todos</option>
        <option value="0">Remover filtro</option>
      </select>
    </>
  )
}

export const FiltroEnviado = () => {
  const { addReceiptsFilter, removeReceiptsFilter, setVisibleFliters} = useContext(ReceiptsContext);
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (e, index)=>{
    setSelectedOption(e.target.value)
    if (e.target.value !== "0"){
      const newFiltro = `${e.target.id}=${e.target.value}`
      addReceiptsFilter(newFiltro, e.target.id)
    }else{
      removeReceiptsFilter(e.target.id)
      setVisibleFliters((prevState) =>prevState.filter((item) => item != index))
    }
  }

  return(
    <>
      <div >Enviado</div>
      <select  id="isSended" value={selectedOption} onChange={(e) => handleChange(e, 3)}>
        <option value="true">Enviado</option>
        <option value="false">No enviado</option>
        <option value=""  >Todos</option>
        <option value="0">Remover filtro</option>
      </select>
    </>
  )
}

export const FiltroLeido = () => {
  const { addReceiptsFilter, removeReceiptsFilter, setVisibleFliters} = useContext(ReceiptsContext);
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (e, index)=>{
    setSelectedOption(e.target.value)
    if (e.target.value !== "0"){
      const newFiltro = `${e.target.id}=${e.target.value}`
      addReceiptsFilter(newFiltro, e.target.id)
    }else{
      removeReceiptsFilter(e.target.id)
      setVisibleFliters((prevState) =>prevState.filter((item) => item != index))
    }
  }

  return(
    <>
      <div >Leido</div>
      <select  id="isReaded" value={selectedOption} onChange={(e) => handleChange(e, 4)}>
        <option value="true">Leido</option>
        <option value="false">No leido</option>
        <option value="">Todos</option>
        <option value="0">Remover filtro</option>
      </select>
    </>
  )
}

export const FiltroTipoRemu = () => {
  const { addUsersFilter, removeUsersFilter, setVisibleFliters} = useContext(UserContext);
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (e, index)=>{
    setSelectedOption(e.target.value)
    if (e.target.value !== "0"){
      const newFiltro = `${e.target.id}=${e.target.value}`
      addUsersFilter(newFiltro, e.target.id)
    }else{
      removeUsersFilter(e.target.id)
      setVisibleFliters((prevState) =>prevState.filter((item) => item != index))
    }
  }

  return(
    <>
      <div >Tipo de remuneración</div>
      <select  id="remunerationType" value={selectedOption} onChange={(e) => handleChange(e, 0)}>
        <option value="Jornalero">Jornalero</option>
        <option value="">Todos</option>
        <option value="0">Remover filtro</option>
      </select>
    </>
  )
}
export const FiltroCargo = () => {
  const { addUsersFilter, removeUsersFilter, setVisibleFliters} = useContext(UserContext);
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (e, index)=>{
    setSelectedOption(e.target.value)
    if (e.target.value !== "0"){
      const newFiltro = `${e.target.id}=${e.target.value}`
      addUsersFilter(newFiltro, e.target.id)
    }else{
      removeUsersFilter(e.target.id)
      setVisibleFliters((prevState) =>prevState.filter((item) => item != index))
    }
  }

  return(
    <>
      <div >Cargo</div>
      <select  id="position" value={selectedOption} onChange={(e) => handleChange(e, 1)}>
        <option value="BackEnd">BackEnd</option>
        <option value="Frontend">FrontEnd</option>
        <option value="Tester">Tester</option>
        <option value="">Todos</option>
        <option value="0">Remover filtro</option>
      </select>
    </>
  )
}
export const FiltroSector = () => {
  const { addUsersFilter, removeUsersFilter, setVisibleFliters} = useContext(UserContext);
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (e, index)=>{
    setSelectedOption(e.target.value)
    if (e.target.value !== "0"){
      const newFiltro = `${e.target.id}=${e.target.value}`
      addUsersFilter(newFiltro, e.target.id)
    }else{
      removeUsersFilter(e.target.id)
      setVisibleFliters((prevState) =>prevState.filter((item) => item != index))
    }
  }

  return(
    <>
      <div >Sector</div>
      <select  id="section" value={selectedOption} onChange={(e) => handleChange(e, 2)}>
        <option value="Dev">Dev</option>
        <option value="QA">QA</option>
        <option value="">Todos</option>
        <option value="0">Remover filtro</option>
      </select>
    </>
  )
}
export const FiltroTurno = () => {
  const { addUsersFilter, removeUsersFilter, setVisibleFliters} = useContext(UserContext);
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (e, index)=>{
    setSelectedOption(e.target.value)
    if (e.target.value !== "0"){
      const newFiltro = `${e.target.id}=${e.target.value}`
      addUsersFilter(newFiltro, e.target.id)
    }else{
      removeUsersFilter(e.target.id)
      setVisibleFliters((prevState) =>prevState.filter((item) => item != index))
    }
  }

  return(
    <>
      <div >Turno</div>
      <select  id="workShift" value={selectedOption} onChange={(e) => handleChange(e, 3)}>
        <option value="8-16">8-16</option>
        <option value="">Todos</option>
        <option value="0">Remover filtro</option>
      </select>
    </>
  )
}
export const FiltroActivo = () => {
  const { addUsersFilter, removeUsersFilter, setVisibleFliters} = useContext(UserContext);
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (e, index)=>{
    setSelectedOption(e.target.value)
    if (e.target.value !== "0"){
      const newFiltro = `${e.target.id}=${e.target.value}`
      addUsersFilter(newFiltro, e.target.id)
    }else{
      removeUsersFilter(e.target.id)
      setVisibleFliters((prevState) =>prevState.filter((item) => item != index))
    }
  }

  return(
    <>
      <div >Activo</div>
      <select  id="isActive" value={selectedOption} onChange={(e) => handleChange(e, 4)}>
        <option value="true">Es activo</option>
        <option value="false">No es activo</option>
        <option value="">Todos</option>
        <option value="0">Remover filtro</option>
      </select>
    </>
  )
}
export const FiltroNacionalidad = () => {
  const { addUsersFilter, removeUsersFilter, setVisibleFliters} = useContext(UserContext);
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (e, index)=>{
    setSelectedOption(e.target.value)
    if (e.target.value !== "0"){
      const newFiltro = `${e.target.id}=${e.target.value}`
      addUsersFilter(newFiltro, e.target.id)
    }else{
      removeUsersFilter(e.target.id)
      setVisibleFliters((prevState) =>prevState.filter((item) => item != index))
    }
  }

  return(
    <>
      <div >Nacionalidad</div>
      <select  id="nationality" value={selectedOption} onChange={(e) => handleChange(e, 5)}>
        <option value="Paraguaya">Paraguaya</option>
        <option value="">Todos</option>
        <option value="0">Remover filtro</option>
      </select>
    </>
  )
}
export const FiltroRol= () => {
  const { addUsersFilter, removeUsersFilter, setVisibleFliters} = useContext(UserContext);
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (e, index)=>{
    setSelectedOption(e.target.value)
    if (e.target.value !== "0"){
      const newFiltro = `${e.target.id}=${e.target.value}`
      addUsersFilter(newFiltro, e.target.id)
    }else{
      removeUsersFilter(e.target.id)
      setVisibleFliters((prevState) =>prevState.filter((item) => item != index))
    }
  }

  return(
    <>
      <div >Rol</div>
      <select  id="role" value={selectedOption} onChange={(e) => handleChange(e, 6)}>
        <option value="Funcionario">Funcionario</option>
        <option value="Supervisor">Supervisor</option>
        <option value="">Todos</option>
        <option value="0">Remover filtro</option>
      </select>
    </>
  )
}
