import React from 'react';

const Experience = ({ english }) => {
  const trabajoExperiencia = [
    {
      Español: {
        Trabajo: 'Desarrollador Web',
        Empresa: 'Autónomo',
        Periodo: 'Enero 2023 - actualidad',
        Lugar: 'Medellín, Antioquia',
        Descripcion: 'Durante mi período de aprendizaje y búsqueda laboral, estoy llevando a cabo proyectos de desarrollo independientes con el objetivo de mejorar mis habilidades técnicas. Estos proyectos abarcan una variedad de áreas, como la creación de juegos como memoria y bingo, la elaboración de herramientas de trabajo, como una lista de tareas pendientes (ToDo list), desarrolladas utilizando tanto JavaScript Vanilla como ReactJs, y la implementación de una réplica de la interfaz principal de Twitter. Actualmente, me encuentro inmerso en el desarrollo de una aplicación de React con el propósito de enriquecer el proceso de aprendizaje para niños de entre 4 y 6 años, haciendo hincapié en su aspecto didáctico. Si desea conocer más sobre mis proyectos, puede visitar mi portafolio web en la siguiente dirección: https://borgesmj.github.io/',
      },
      English: {
        Trabajo: 'Web Developer',
        Empresa: 'Freelancer',
        Periodo: 'January 2023 - Present',
        Lugar: 'Medellín, Antioquia',
        Descripcion: 'During my learning and job search period, I am working on independent development projects with the goal of improving my technical skills. These projects span a variety of areas, including creating games like memory and bingo, crafting work tools such as a to-do list, developed using both Vanilla JavaScript and ReactJs, and implementing a replica of the main Twitter interface. Currently, I am immersed in the development of a React application with the purpose of enriching the learning process for children aged 4 to 6, emphasizing its didactic aspect. If you would like to learn more about my projects, you can visit my web portfolio at the following address: https://borgesmj.github.io/',
      },
    },
    {
      Español: {
        Trabajo: 'Panadero Pastelero',
        Empresa: 'Carlotta Repostería',
        Periodo: 'may. 2018 - feb. 2019',
        Lugar: 'Envigado, Antioquia, Colombia',
        Descripcion: 'Encargado de la producción en el área de panadería, pastelería, repostería, galletería',
      },
      English: {
        Trabajo: 'Baker Pastry Chef',
        Empresa: 'Carlotta Bakery',
        Periodo: 'May 2018 - Feb 2019',
        Lugar: 'Envigado, Antioquia, Colombia',
        Descripcion: 'Responsible for production in the bakery, pastry, confectionery, and cookie area.',
      },
    },
    {
      Español: {
        Trabajo: 'Inspector QA/QC',
        Empresa: 'PDVSA.Petropiar',
        Periodo: 'sept. 2015 - nov. 2017',
        Lugar: 'Barcelona, Anzoátegui, Venezuela',
        Descripcion: 'Trabajos de inspección y control de calidad en las diferentes áreas del mejorador de crudo Petropiar, perteneciente al Complejo “José Antonio Anzoátegui”, realizando trabajos de inspección y control de soldaduras, equipos estáticos. Seguimiento y control (máster de soldadura, record de reparaciones, etc.) de los trabajos de soldadura y desempeño de soldadores en los trabajos de mantenimiento, reparación y ampliación en las distintas áreas del mejorador Petropiar. Inspección de materiales y equipos. Control y seguimiento de los parámetros y procedimientos para la PREPARACION DE SUPERFICIES y aplicación de pintura de los sistemas anticorrosivos. Ejecución de trabajos de Inspección con Ensayos No Destructivos (NDT). Aplicar planes de calidad de los trabajos realizados en los equipos del mejorador en los talleres internos y externos, a fin de velar por el cumplimiento de las normas y especificaciones de calidad requeridas. Preparativos para la Parada de Planta Mayor con Archivos Excel, contabilizando la volumetría de inspecciones y soldaduras. Testificar y dar cumplimiento al programa de mantenimiento preventivo de las válvulas de seguridad del mejorador. Trabajos en creación de base de datos de soldadores a trabajar en ventanas operacionales y la parada mayor.',
      },
      English: {
        Trabajo: 'QA/QC Inspector',
        Empresa: 'PDVSA.Petropiar',
        Periodo: 'Sept 2015 - Nov 2017',
        Lugar: 'Barcelona, Anzoátegui, Venezuela',
        Descripcion: 'Inspection and quality control work in various areas of the Petropiar crude upgrader, part of the "José Antonio Anzoátegui" Complex, involving inspection and control of welds, static equipment. Monitoring and control (welding master, repair record, etc.) of welding work and performance of welders in maintenance, repair, and expansion work in different areas of the Petropiar upgrader. Inspection of materials and equipment. Control and monitoring of parameters and procedures for SURFACE PREPARATION and application of anticorrosive paint systems. Execution of Non-Destructive Testing (NDT) inspection work. Implementing quality plans for work on upgrader equipment in internal and external workshops to ensure compliance with required quality standards and specifications. Preparations for Major Plant Shutdown with Excel files, counting the volume of inspections and welds. Witnessing and ensuring compliance with the preventive maintenance program for safety valves in the upgrader. Work on creating a database of welders to be used in operational windows and the major shutdown.',
      },
    },
  ];

  const trabajosAMostrar = english ? trabajoExperiencia.map(item => item.English) : trabajoExperiencia.map(item => item.Español);

  return (
    <div>
      <h2>{english ? 'Experience' : 'Experiencia'}</h2>
      {trabajosAMostrar.map((trabajo, index) => (
        <div key={index}>
          <h3>{trabajo.Trabajo}</h3>
          <p>{`${trabajo.Empresa}`}</p>
          <p>{`${trabajo.Periodo}`}</p>
          <p>{`${trabajo.Lugar}`}</p>
          <p>{`${trabajo.Descripcion}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
