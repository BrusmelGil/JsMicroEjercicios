/*Añadir al ejercicio anterior que nos diga por 
cuál de los cuatro es divisible (hay que decir todos por los que es divisible) */


function verificarDivisibilidad() {
    
    var numero = parseInt(document.getElementById("numero").value);

    var divisibles = [];

    if (verificarDivisibilidadPorDos(numero)) {
        divisibles.push("2");
    }

    if (verificarDivisibilidadPorTres(numero)) {
        divisibles.push("3");
    }

    if (verificarDivisibilidadPorCinco(numero)) {
        divisibles.push("5");
    }

    if (verificarDivisibilidadPorSiete(numero)) {
        divisibles.push("7");
    }


    if (divisibles.length > 0) {
        document.getElementById("resultado").textContent = "Es divisible por: " + divisibles.join(", ");
    } else {
        document.getElementById("resultado").textContent = "No es divisible por ninguno de los cuatro.";
    }
}

function verificarDivisibilidadPorDos(numero) {
    return numero % 2 === 0;
}

function verificarDivisibilidadByThree(numero) {
    return numero % 3 === 0;
}

function verificarDivisibilidadPorTres(numero) {
    return numero % 3 === 0;
}

function verificarDivisibilidadPorCinco(numero) {
    return numero % 5 === 0;
}

function verificarDivisibilidadPorSiete(numero) {
    return numero % 7 === 0;
}