import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';

const Estudiante = () => {
  const [contenido, setContenido] = useState([])
  useEffect(()=>{
    const fetchContent = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/estudiante")
        setContenido(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchContent();
  },[])
  return (
    <div>
      <h1>Libros para estudiantes</h1>
      <div className='contenidos'>
        {contenido.map(cont=>(
          <div className='contenido' key={cont.ID_contenido}>
            <h2>{cont.Nombre}</h2>
            <h3>{cont.URL}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Estudiante
