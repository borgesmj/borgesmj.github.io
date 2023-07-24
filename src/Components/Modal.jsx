import React, { useState } from 'react'
import { GrClose } from "react-icons/gr";
import ModalLinks from './ModalLinks';

const Modal = ({setModal, setProfile, setData}) => {

    const[nombre, setNombre] = useState('')
    const[numero, setNumero] = useState('')
    const[email, setEmail] = useState('')
    const[option, setOption] = useState('')

    const [error, setError] = useState(false)
    const handleSubmit = (e) =>{
      e.preventDefault()
      if ([nombre, numero, email, option].includes('')){
        setError(true)
      } else {
      console.log('enviando formulario')
      let mensaje = `Hola, Miguel, mi nombre es ${nombre} y te quería contactar para un trabajo de ${option}, mi numero de telefono es ${numero} y mi correo es ${email}. Quedo atento a tu respuesta`
      let whatsappLink = "https://api.whatsapp.com/send?phone=573184255610&text=" + encodeURI(mensaje);
      window.open(whatsappLink, "_blank")

      setNombre('')
      setNumero('')
      setEmail('')
      setOption('')
      setError(false)
    }
    
  }

    const handleclick = (e) =>{
      e.preventDefault()
      setModal(false)
      setProfile(true)
      setData(true)
    }
  return (
    <div id='modal' className='modalActiva'>
      <span className='closebtn' onClick={handleclick}><GrClose/></span>
      <div className='modalinterno'>
        {error && <div className='error'>
            <span>Todos los elementos son necesarios</span>
        </div>}
        <p>Trabajemos juntos</p>
        <form action="">
          <label htmlFor="nombre">Nombre Completo</label>
          <input 
            onChange={(e)=>setNombre(e.target.value)} 
            type="text" 
            id='nombre'
            value={nombre}/>
          <label htmlFor="numero">Numero de Contacto:</label>
          <input 
            onChange={(e)=>setNumero(e.target.value)}
            type="text" 
            id='numero' 
            value={numero}/>
          <label htmlFor="email">Email:</label>
          <input 
            onChange={(e)=>setEmail(e.target.value)} 
            type="email" 
            name="" 
            id="email"
            value={email} />
          <label htmlFor="opciones">¿En que podremos trabajar?</label>
          <select 
            name="" 
            id="option"
            onChange={(e)=>setOption(e.target.value)}
            >
            <option value="">--Por favor, selecciona una opcion--</option>
            <option value="Creacion de página web">Creacion de página web</option>
            <option value="Traduccion de texto ingles/español">Traduccion de texto ingles/español</option>
            <option value="Trabajos en Excel">Trabajos en Excel</option>
            <option value="Trascripcion de textos">Trascripcion de textos</option>
            <option value="Asistente personal">Asistente personal</option>
          </select>
          <input type="submit" onClick={handleSubmit} value="Enviar" />
        </form>
        <ModalLinks/>
      </div>
    </div>
  )
}

export default Modal
