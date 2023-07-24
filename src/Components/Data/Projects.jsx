import React from 'react';

const Projects = () => {

  let base = 'https://github.com/borgesmj/'
  let link = 'https://borgesmj.github.io/'
  const proyectos = [
    {
      Titulo: "Tienda Virtual",
      Descripcion: "Primer proyecto para una empresa real, creando una tienda virtual ara un local de ventas de licores en Venezela, que tiene un carrito de compras, al que puedes acceder, eliminar o agregar mas productos, y enviar el pedido directamente por un mensaje de WhatsApp.",
      linkCodigo: `${base}tienda-licoreria/`,
      linkPrevia: `https://tienda-licoreria.netlify.app/`,
      tags: ["HTML",  "Tailwind", "JavaScript", "React",]
    },{
      Titulo: "Juego del Ahorcado",
      Descripcion: "Clasico juego de la infancia, donde hay que adivinar una palabra revelando las letras que hay en ella.",
      linkCodigo: `${base}juego-del-ahorcado/`,
      linkPrevia: `${link}juego-del-ahorcado/`,
      tags: ["HTML", "CSS", "JavaScript Vanilla"]
    },
    {
      Titulo: "Chequeador de palindromos",
      Descripcion: "Proyecto que realicé a partir de una tarea de FreecodeCamp, que toma una frase, una palabra o numeros y evalua si son palíndromos o no",
      linkCodigo: `${base}palindrome-checker`,
      linkPrevia: `${link}palindrome-checker`,
      tags: ["HTML", "CSS", "JavaScript Vanilla"]
    },
    {
      Titulo: "Cifrado Cesar",
      Descripcion: "Proyecto que realicé a partir de una tarea de FreecodeCamp, que toma una frase escrita y lo convierte a un mensaje encriptado, el cual tambien se puede traducir de la misma manera",
      linkCodigo: `${base}cifrado-cesar`,
      linkPrevia: `${link}cifrado-cesar`,
      tags: ["HTML", "CSS", "JavaScript Vanilla"]
    },
    {
        Titulo: "Twitter Clon React",
        Descripcion: "Proyecto Realizado con React JS, realizando una copia al la red social TWITTER, importando iconos como componentes. se imprime en pantalla un contador de caracteres, el boton se mantiene bloqueado si se pasa de los 280, o si no hay nada de texto.",
        imagen: '/Img/Twitter.png',
        linkCodigo: `${base}twitter-clon`,
        linkPrevia: "https://borgesmj-twitter-clon.netlify.app/",
        tags: ["HTML",  "Tailwind", "JavaScript", "React",]
      },
    {
        Titulo: "ToDo List React",
        Descripcion: "Este es mi primer proyecto con react, un proyecto de práctica, se comienza con un formulario que toma tres datos, el nombre de la tarea, la fecha de entrega y un comentario, donde se podria incluir la persona a cargo, la tarea se va a la segunda columna, como una tarea pendiente, ahi se puede editar o eliminar...",
        imagen: '/Img/todo-list-react.png',
        linkCodigo: `${base}todo-list-react`,
        linkPrevia: "https://borgesmj-todo-list.netlify.app/",
        tags: ["HTML",  "Tailwind", "JavaScript", "React",]
    },
    {
        Titulo: "Quiz App",
        Descripcion: "Se inicia con un arreglo de 10 preguntas con respuestas, y las muestra aleatoriamente en pantalla, lleva un contador de puntos y tres mensajes distintos al final, que imprime en pantalla segun el puntaje",
        imagen: '/Img/Quiz-App.png',
        linkCodigo: `${base}quiz-App`,
        linkPrevia: `${link}quiz-App`,
        tags: ["HTML", "CSS", "JavaScript Vanilla"]
    },
    {
        Titulo: "Calculadora",
        Descripcion: "Utilizando los valores de la pantalla y los valores tomados de los eventos de click para realizar operaciones matemáticas básicas.",
        imagen: "/Img/calculadora.png",
        linkCodigo: `${base}calculadora`,
        linkPrevia: `${link}calculadora`,
        tags: ["HTML", "CSS", "JavaScript Vanilla"]


    },
    {
        Titulo: "Juego de Memoria",
        Descripcion: "Este juego evalua los pares de las cartas, verifica si son iguales, si no lo son, las regresa a su posicion inicial y si lo son, las cambia de color, y aumenta un contador de puntos.",
        imagen: "/Img/Juego-de-Memoria.png",
        linkCodigo: `${base}juego-de-memoria `,
        linkPrevia: `${link}juego-de-memoria`,
        tags: ["HTML", "CSS", "JavaScript Vanilla"]


    },
    {
        Titulo: "Tres en linea",
        Descripcion: "En este juego aprendí a manipular el DOM con solo click, y seleccionar y mostrar un ganador mediate una evaluacion de criterios",
        imagen: "/Img/Juego-3-en-linea.png",
        linkCodigo: `${base}3enlinea`,
        linkPrevia: `${link}3enlinea`,
        tags: ["HTML", "CSS", "JavaScript Vanilla"]


    },
    {
        Titulo: "To-Do List",
        Descripcion: "En este proyecto aprendí a agregar elementos nuevos a una lista, a marcar las tareas hechas y eliminar otras.",
        imagen: "/Img/To-do_list.png",
        linkCodigo: `${base}to-do_list`,
        linkPrevia: `${link}to-do_list`,
        tags: ["HTML", "CSS", "JavaScript Vanilla"]


    },
    {
        Titulo: "Bingo",
        Descripcion: "Este proyecto fué el primero donde comencé a trabajar con JavaScript, utilizando numeros aleatorios para seleccionar el numero a imprimir en la pantalla",
        imagen: "/Img/BINGO.png",
        linkCodigo: `${base}Bingo`,
        linkPrevia: `${link}Bingo`,
        tags: ["HTML", "CSS", "JavaScript Vanilla"]


    },
]


  return (
    <div id='projects'>
      <h2>Proyectos</h2>
      <div className='project-grid'>
      {proyectos.map((item, index) => (
        <div key={index} className='Project-card'>
          <h4>{item.Titulo}</h4>
          <p>{item.Descripcion}</p>
          <div>
            <a href={item.linkCodigo}>Código</a>
            <a href={item.linkPrevia} target='blank'>Demo</a>
          </div>
            Tags:
          <div className='tags'>
            {item.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Projects;
