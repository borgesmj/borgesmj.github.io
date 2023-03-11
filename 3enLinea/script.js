//Declarando variables globales
    let counterPlayerOne = 0;
    let counterPlayerTwo = 0;
    let playerOne  = true
    let counter = 0
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const tablero = []
    
    
    
//la funcion btnPulsado marca
//con una X o una O segun el turno del jugador
//tambien marca la posicion de la casilla
//que se hizo click
//y llama la funcion changeTurns() para 
//cambiar el turno
    const btnPulsado = (e, pos) =>{
     
        const btn = e.target;
        const letra = playerOne === true ? 'X' : 'O';
        btn.textContent =  letra
        tablero[pos] = letra
        playerOne = !playerOne
        let number = tablero
        console.log(number)
        
    }
    
    
    
    document.querySelectorAll('.celda').forEach(
        (element, i) => element.addEventListener('click', (e) => btnPulsado(e,i))
    )
    
        
    
//la funcion changeTurns() cambia de turno
//entre los jugadores
//esta funcion es llamada dentro de la funcion 
//startGame() y cada vez que se pulsa una casilla
//en btnPulsado
    function changeTurns (){
        const jugadorUno = document.querySelector('#player-one');
        const jugadorDos = document.querySelector('#player-two');
     
        if (playerOne  === true){
            jugadorUno.style.backgroundColor = "red";
            jugadorDos.style.backgroundColor = "blue";
            document.querySelector('#turno-dos').textContent = '';
            document.querySelector('#turno-uno').textContent = 'Tu turno';
        
        } else {
            jugadorDos.style.backgroundColor = "red"
            jugadorUno.style.backgroundColor = "blue"
            document.querySelector('#turno-uno').textContent = ''
            document.querySelector('#turno-dos').textContent = 'Tu turno';
        
        }
    }
      

    
//La funcion starGame() inicia el juego
//toma el array declarado al comienzo
//y evalua cada casilla para borrar 
//las letras escritas
    function startGame(){
        for(let i = 0; i<arr.length; i++){
            const celda = document.querySelector('#'+'celda'+arr[i]);
            celda.textContent=''          
        }
        changeTurns()
    }
    
    
    startGame()
    


