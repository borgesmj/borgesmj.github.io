import React from 'react'

const Certificates = () => {
  const certificados = [
    {
      link: "https://www.efset.org/cert/uGmFbo",
      nombre: "English level test",
      Empresa: "EF"
    },
    {
      link: "https://www.freecodecamp.org/certification/borgesmj19/javascript-algorithms-and-data-structures",
      nombre: "JavaScript Algorithms and Data Structures",
      Empresa: "FreeCodeCamp"
    },
    {
      link: "https://www.freecodecamp.org/certification/borgesmj19/responsive-web-design",
      nombre: "Responsive Web Design",
      Empresa: "FreeCodeCamp"
    },
  ]
  return (
    <div id="certificates">
      <h3>Certificados</h3>
      <ul>
        {certificados.map((item, index) => (
        <li key={index}><a href={item.link}>{item.nombre}, by <span className='bold'>{item.Empresa}</span></a></li>
        ))}
      </ul>
    </div>
  )
}

export default Certificates
