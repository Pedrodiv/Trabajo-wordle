
let intentos = 6;
let lista = ['APPLE', 'HOUSE', 'HORSE', 'FUNNY','SHORT',]
let palabra= lista[Math.floor(Math.random()*lista.length)]

const UrlApi= 'https://random-word-api.herokuapp.com/word?length=5';

fetch(UrlApi).then(response => response.json()).then(response =>{
    palabra =response[0].toUpperCase();
    console.log("API:",palabra);
})
.catch(err => {
    console.log('Hubo un problema con el API!:(');
    let diccionario = ["SHOTT","MOLDS","CLOUR","GIMME","MONEY","HORSE","HEART","LOVER"]
    palabra = diccionario[Math.floor(Math.random()*diccionario.length)].toUpperCase();
    console.log("ERROR",palabra);
})


let button = document.getElementById('guess-button')

button.addEventListener('click',intentar)

function intentar(){
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    const SPAN = document.createElement('span')
    ROW.className = 'row';
    const INTENTO = leerIntento();
    console.log(INTENTO)
    if(INTENTO.trim().length !==5){
        alert("Solo se aceptan palabras de 5 letras")
        return
    }
    if(INTENTO===palabra){
        console.log("Ganaste")
        terminar("<h1>GANASTE!</h1")
    }
    for (let i in palabra){
        const SPAN = document.createElement('span')
        SPAN.className = 'letter';
        if(palabra[i]===INTENTO[i]){
            console.log(INTENTO[i], "verde")
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        }else if(palabra.includes(INTENTO[i])){
            console.log(INTENTO[i],"amarillo")
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        }else{
            console.log(INTENTO[i], "gris")
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
    
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--
    if(intentos===0){
    console.log("perdiste")
    terminar("<h1>PERDISTE!</h1>")
    }
}
function leerIntento(){
    let valor= document.getElementById('guess-input').value
    valor= valor.toUpperCase()
    return valor
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
