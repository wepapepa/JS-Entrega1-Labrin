//función con condicionales
function adivinadorNumero(numeroSecreto, numeroUsuario){
    if (numeroUsuario === numeroSecreto) {
        return "correcto";
    }else if (numeroUsuario < numeroSecreto){
        return "muy bajo";
    } else {
        return "muy alto";
    }
}

//bucle 
const maxIntentos = 4;
let numeroSecreto = Number(47);
let intentos = 0;

while (intentos < maxIntentos) { //mientras el numero de intentos sea menor a 4 se sigue repitiendo el bucle
    let numeroUsuario = Number(prompt(`¿Puedes adivinar el número secreto? Este es tu intento ${intentos + 1}.`));//marca cuantos intentos lleva

    let resultado = adivinadorNumero(numeroSecreto, numeroUsuario);//función de arriba para linkearla al bucle

    if (resultado === "correcto"){
        alert(`¡Correcto! El número secreto es ${numeroSecreto}. Felicidades.`);
        break;
    } else {
        alert(`Lo siento! Adivinaste incorrectamente con: ${numeroUsuario}. ¡Inténtalo de nuevo!`)
    }

    intentos++;
}

if (intentos === maxIntentos){//cuando los intentos llegan a 4 se acaban los intentos y se cierra el bucle
    alert(`Lo siento, ya no te quedan intentos :(`)
}

