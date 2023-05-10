let projectsList = document.querySelector('#projects-section')

const proyectos = [
    {
        Titulo: "Twitter Clon React",
        Descripcion: "Proyecto Realizado con React JS, realizando una copia al la red social TWITTER, importando iconos como componentes. se imprime en pantalla un contador de caracteres, el boton se mantiene bloqueado si se pasa de los 280, o si no hay nada de texto.",
        imagen: '/Img/Twitter.png',
        linkCodigo: "https://github.com/borgesmj/twitter-clon",
        linkPrevia: "https://borgesmj-twitter-clon.netlify.app/",
        tags: ["HTML, CSS, JavaScript, React"]
    },
    {
        Titulo: "ToDo List React",
        Descripcion: "Este es mi primer proyecto con react, un proyecto de práctica, se comienza con un formulario que toma tres datos, el nombre de la tarea, la fecha de entrega y un comentario, donde se podria incluir la persona a cargo, la tarea se va a la segunda columna, como una tarea pendiente, ahi se puede editar o eliminar...",
        imagen: '/Img/todo-list-react.png',
        linkCodigo: "https://github.com/borgesmj/todo-list-react",
        linkPrevia: "https://borgesmj-todo-list.netlify.app/",
        tags: ["HTML, CSS, JavaScript, React"]
    },
    {
        Titulo: "Quiz App",
        Descripcion: "Se inicia con un arreglo de 10 preguntas con respuestas, y las muestra aleatoriamente en pantalla, lleva un contador de puntos y tres mensajes distintos al final, que imprime en pantalla segun el puntaje",
        imagen: '/Img/Quiz-App.png',
        linkCodigo: "https://github.com/borgesmj/borgesmj.github.io/tree/main/Quiz-app",
        linkPrevia: "/Quiz-app/index.html",
        tags: ["HTML, CSS, JavaScript"]
    },
    {
        Titulo: "Calculadora",
        Descripcion: "Utilizando los valores de la pantalla y los valores tomados de los eventos de click para realizar operaciones matemáticas básicas.",
        imagen: "/Img/calculadora.png",
        linkCodigo: "https://github.com/borgesmj/borgesmj.github.io/tree/main/calculadora",
        linkPrevia: "/calculadora/calculadora.html"
    },
    {
        Titulo: "Juego de Memoria",
        Descripcion: "Este juego evalua los pares de las cartas, verifica si son iguales, si no lo son, las regresa a su posicion inicial y si lo son, las cambia de color, y aumenta un contador de puntos.",
        imagen: "/Img/Juego-de-Memoria.png",
        linkCodigo: "https://github.com/borgesmj/borgesmj.github.io/tree/main/Juego-de-Memoria",
        linkPrevia: "/Juego-de-Memoria/Juego-de-memoria.html"
    },
    {
        Titulo: "Tres en linea",
        Descripcion: "En este juego aprendí a manipular el DOM con solo click, y seleccionar y mostrar un ganador mediate una evaluacion de criterios",
        imagen: "/Img/Juego-3-en-linea.png",
        linkCodigo: "https://github.com/borgesmj/borgesmj.github.io/tree/main/3enLinea",
        linkPrevia: "/3enLinea/3enLinea.html"
    },
    {
        Titulo: "To-Do List",
        Descripcion: "En este proyecto aprendí a agregar elementos nuevos a una lista, a marcar las tareas hechas y eliminar otras.",
        imagen: "/Img/To-do_list.png",
        linkCodigo: "https://github.com/borgesmj/borgesmj.github.io/tree/main/To-do_List",
        linkPrevia: "/To-do_List/todo-list.html"
    },
    {
        Titulo: "Bingo",
        Descripcion: "Este proyecto fué el primero donde comencé a trabajar con JavaScript, utilizando numeros aleatorios para seleccionar el numero a imprimir en la pantalla",
        imagen: "/Img/BINGO.png",
        linkCodigo: "https://github.com/borgesmj/borgesmj.github.io/tree/main/Bingo",
        linkPrevia: "/Bingo/Bingo.html"
    },
    {
        Titulo: "Tribute Page",
        Descripcion: "Este proyecto fué una prueba para FreeCodeCamp, donde se evaluó la capacidad de dar estilo a una pagina por medio de CSS",
        imagen: "/Img/Disturbed-band-logo.png",
        linkCodigo: "https://github.com/borgesmj/borgesmj.github.io/tree/main/Tribute-page",
        linkPrevia: "/Tribute-page/index.html"
    },
    {
        Titulo: "Nav bar",
        Descripcion: "Este proyecto fué una prueba para la plataforma de FreeCodeCamp, donde debía hacer una barra de navegación con links directo a secciones.",
        imagen: "/Img/Excel_page.png",
        linkCodigo: "https://github.com/borgesmj/borgesmj.github.io/tree/main/nav-bar",
        linkPrevia: "/nav-bar/index.html"
    }
]




function verProyectos(){
    projectsList.innerHTML = ''
    
    for (let i= 0; i < proyectos.length; i++){

        projectsList.innerHTML += `
        <div class="project-card">
            <div class="inside-square">
                <img class="image-project" src=${proyectos[i].imagen} alt="">
                <div class="data-project">
                    <div class="project-title">${proyectos[i].Titulo}</div>
                        <p>${proyectos[i].Descripcion}</p>
                            <div class="projects-button">
                        <a href=${proyectos[i].linkCodigo} target="_blank" class="button">Ver Codigo</a>
                        <a href=${proyectos[i].linkPrevia} target="_blank" class="button">Vista Previa</a>
                    </div>
                </div>
            </div>
        </div>
`
    }
}

verProyectos()



function verUltimos() {
    projectsList.innerHTML = ''
    
    for (let i= 0; i < 3; i++){

        projectsList.innerHTML += `
        <div class="project-card">
            <div class="inside-square">
                <img class="image-project" src=${proyectos[i].imagen} alt="">
                <div class="data-project">
                    <div class="project-title">${proyectos[i].Titulo}</div>
                        <p>${proyectos[i].Descripcion}</p>
                            <div class="projects-button">
                        <a href=${proyectos[i].linkCodigo} class="button">Ver Codigo</a>
                        <a href=${proyectos[i].linkPrevia} class="button">Vista Previa</a>
                    </div>
                </div>
            </div>
        </div>
`
    }  
}






