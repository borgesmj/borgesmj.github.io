import React from 'react'

const Experience = () => {


  const experiencia = [
    {
      Titulo: 'Desarrollador Web',
      Empresa: 'Autónomo',
      Tiempo: 'Enero 2023 - Actualidad',
      Lugar: 'Medellin, Antioquia, Colombia',
      Texto: "Durante mi período de aprendizaje y búsqueda laboral, estoy llevando a cabo proyectos de desarrollo independientes con el objetivo de mejorar mis habilidades técnicas. Estos proyectos abarcan una variedad de áreas, como la creación de juegos como memoria y bingo, la elaboración de herramientas de trabajo, como una lista de tareas pendientes (ToDo list), desarrolladas utilizando tanto JavaScript Vanilla como ReactJs, y la implementación de una réplica de la interfaz principal de Twitter. Actualmente, me encuentro inmerso en el desarrollo de una aplicación de React con el propósito de enriquecer el proceso de aprendizaje para niños de entre 4 y 6 años, haciendo hincapié en su aspecto didáctico. Si desea conocer más sobre mis proyectos, puede visitar mi portafolio web en la siguiente dirección: https://borgesmj.github.io/ "
    },
    {
      Titulo: 'Panadero Pastelero',
      Empresa: 'Carlotta Repostería',
      Tiempo: 'may. 2018 - feb. 2019',
      Lugar: 'Envigado, Antioquia, Colombia',
      Texto: 'Encargado de la producción en el área de panadería, pastelería, repostería, galleteria'
    },
    {
      Titulo: 'Inspector QA/QC',
      Empresa: 'PDVSA.Petropiar',
      Tiempo: 'sept. 2015 - nov. 2017',
      Lugar: 'Barcelona, Anzoátegui, Venezuela ',
      Texto: 'Trabajos de inspección y control de calidad en las diferentes áreas del mejorador de crudo Petropiar, perteneciente al Complejo “José Antonio Anzoátegui”, realizando trabajos de inspección y control de soldaduras, equipos estáticos.     Seguimiento y control (máster de soldadura, record de reparaciones, etc.) de los trabajos de soldadura y desempeño de soldadores en los trabajos de mantenimiento, reparación y ampliación en las distintas áreas del mejorador Petropiar. Inspección de materiales y equipos. Control y seguimiento de los parámetros y procedimientos para la PREPARACION DE SUPERFICIES y aplicación de pintura de los sistemas anticorrosivos. Ejecución de trabajos de Inspección con Ensayos No Destructivos (NDT). Aplicar planes de calidad de los trabajos realizados en los equipos del mejorador en los talleres internos y externos, a fin de velar por el cumplimiento de las normas y especificaciones de calidad requeridas. Preparativos para la Parada de Planta Mayor con Archivos Excel, contabilizando la volumetría de inspecciones y soldaduras. Testificar y dar cumplimiento al programa de mantenimiento preventivo de las válvulas de seguridad del mejorador. Trabajos en creación de base de datos de soldadores a trabajar en ventanas operacionales y la parada mayor.'
    },
  ]
  return (
    <div id='experience'>
      <h2>Experiencia</h2>
      {experiencia.map ((item, index) => (
        <div key={index} className="experience-card">
        <h3>{item.Titulo}</h3>
        <p>{item.Empresa}</p>
        <p>{item.Tiempo}</p>
        <p>{item.Lugar}</p>
        <p>{item.Texto}</p>
      </div>
      ))}
      <div><a href="https://www.linkedin.com/in/borgesmj">Ver CV completo</a></div>
    </div>
  )
}

export default Experience
