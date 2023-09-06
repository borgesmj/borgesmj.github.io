// iniciar o reiniciar el juego
//declaramos un arreglo que contenga los 75 numeros del bingo
let arr = [];
for (let i = 1; i <= 75; i++) {
    arr.push(i);
}
console.log(arr);

//click en el boton para jugar
const boton = document.querySelector("#boton");
boton.addEventListener("click", function(){

//se declara una accion mientras que la longitud del arreglo sea mayor a 0
    if (arr.length>0){

        //se busca un numero aleatorio entre 0 y la longitud del arreglo, para que nos 
        //regrese una posicion
        let numeroAleatorio = Math.floor(Math.random()*arr.length);
        let letraAsignada

        //se asigna un numero de bingo con respecto a la posicion que nos salio en el numero aleatorio
        var numeroBingo=arr[numeroAleatorio]
        console.log(numeroBingo)

        //se le asigna una letra del juego
        if(numeroBingo >= 1 && numeroBingo <=15)letraAsignada="B"
        if(numeroBingo >= 16 && numeroBingo <=30)letraAsignada="I"
        if(numeroBingo >= 31 && numeroBingo <=45)letraAsignada="N"
        if(numeroBingo >= 46 && numeroBingo <=60)letraAsignada="G"
        if(numeroBingo >= 61 && numeroBingo <=75)letraAsignada="O"

        //en la pantalla se imprime la letra y el numero que salieron
        document.querySelector("#letra").innerHTML = letraAsignada;
        document.querySelector("#numero").innerHTML = numeroBingo;
         
        //Se borra el numero que salio del arreglo para que no repita
        array=arr.indexOf(numeroBingo);
        arr.splice(array,1);
        console.log(arr);

        //se selecciona la celda en la tabla de numeros, que indica a los jugadores
        //cual numero ya salió
        //NOTA: el querySelector no relaciona con ID numericos
        //se debe colocar id de texto antes del numero
        const celda = document.querySelector('#'+'celda'+numeroBingo);
        //para luego camniar el color de fondo a rojo
        celda.style.backgroundColor = "red";
    
        //Para retornar un mensaje cuando se hayan acabado los numeros
    } else alert("Juego Terminado, Felicidades al ganador. Por favor, reiniciar para una nueva partida");
    return;

})
