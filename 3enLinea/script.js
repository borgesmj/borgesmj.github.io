const resetButton = document.querySelector('#resetBtn');
const playerOneWins = document.querySelector('#victorias1');
const playerTwoWins = document.querySelector('#victorias2');
const celdas = document.querySelectorAll(".celda"); 

let currentPlayer = 'X'
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOne = true;
let tablero= []
let arr = []

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
// ================================================================================
// Funciones
// ================================================================================

//Boton Reset
const resetAllClick = () =>{
    tablero =[]
    playerOne = false;
    playerOneScore = 0;
    playerTwoScore = 0;
    gameOver = false;
    playerOneWins.innerHTML = playerOneScore;
    playerTwoWins.innerHTML = playerTwoScore;
    celdas.forEach((celda) => ( celda.innerHTML = ''))
    changeTurns()
    
    console.clear()
}

const checkForWin = () =>{
    if (tablero[0] == tablero[1] &&  tablero[0] == tablero[2] && tablero [0]){
        return true
    } else if (tablero[3] == tablero[4] &&  tablero[3] == tablero[5] && tablero [3]){
        return true
    }  else if (tablero[6] == tablero[7] &&  tablero[6] == tablero[8] && tablero [6]){
        return true
    }  else if (tablero[0] == tablero[3] &&  tablero[0] == tablero[6] && tablero [0]){
        return true
    }  else if (tablero[1] == tablero[4] &&  tablero[1] == tablero[7] && tablero [1]){
        return true
    }  else if (tablero[2] == tablero[5] &&  tablero[2] == tablero[8] && tablero [2]){
        return true
    }  else if (tablero[0] == tablero[4] &&  tablero[0] == tablero[8] && tablero [0]){
        return true
    }  else if (tablero[2] == tablero[4] &&  tablero[2] == tablero[6] && tablero [2]){
        return true
    } else {juegoEmpate()}

}

 const juegoEmpate = () =>{
    let i = 0
    arr.push(i)
    i++
    console.log(arr.length)
    if(arr.length>8){
        console.log('empate')
        loadGame()
        arr=[]
        alert('fue un empate')
    }
 }

  

//cargar nuevo juego
const loadGame = () =>{
    celdas.forEach((celda) => ( celda.innerHTML = ''))

}
loadGame()

//escribir la casilla
const btnPulsado = (e, pos) =>{ 
    const btn = e.target;
    if (btn.innerHTML !== ''){
        return
    }
    const letra = playerOne === true ? 'X' : 'O';
    btn.textContent =  letra
    tablero[pos] = letra
    let number = tablero
    
    // console.log(number)
    // changeTurns()
    if (checkForWin()){
        if (playerOne === true){
            playerOneScore ++;
            playerOneWins.innerHTML = playerOneScore;
            console.log('jugador 1 ganador');
            alert('Ganador, Jugador 1')
            tablero = []
            arr=[]
            // console.log(playerOne+' desde la victoria')
            loadGame()
        } else {
            playerTwoScore ++
            playerTwoWins.innerHTML = playerTwoScore;
            console.log('jugador 2   ganador');
            alert ('Ganador, Jugador 2')
            tablero = []
            arr=[]
            // console.log(playerOne+' desde la victoria')
            loadGame()
        }
    } else {
      changeTurns()  
    }
}

//Marcar el turno en pantalla
const changeTurns = () => {
    const jugadorUno = document.querySelector('#player-one');
    const jugadorDos = document.querySelector('#player-two');
    playerOne = !playerOne
    if (playerOne  === true){
        jugadorUno.style.backgroundColor = "#7EC8E3";
        jugadorDos.style.backgroundColor = "#050A30";
        currentPlayer = 'X';
        // console.log(playerOne)
    } else {
        jugadorDos.style.backgroundColor = "#7EC8E3"
        jugadorUno.style.backgroundColor = "#050A30"
        currentPlayer = 'O;'
        // console.log(playerOne)
    }
}
// ================================================================================
// Eventos
// ================================================================================
resetButton.addEventListener('click', resetAllClick);

document.querySelectorAll('.celda').forEach(
    (element, i) => element.addEventListener('click', (e) => btnPulsado(e,i))
)