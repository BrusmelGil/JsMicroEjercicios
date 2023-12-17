/*Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 
(sólo hay que comprobar si lo es por uno de los cuatro) */



function verificarDivisibilidad() {
    var numero = parseInt(document.getElementById("numero").value);

    // Verifica la divisibilidad
    var resultado = verificarDivisibilidadPorDos(numero) ||
                    verificarDivisibilidadPorTres(numero) ||
                    verificarDivisibilidadPorCinco(numero) ||
                    verificarDivisibilidadPorSiete(numero);

    // Muestra el resultado
    document.getElementById("resultado").textContent = resultado;
}

function verificarDivisibilidadPorDos(numero) {
    return numero % 2 === 0 ? "Es divisible por 2." : "";
}

function verificarDivisibilidadByThree(numero) {
    return numero % 3 === 0 ? "Es divisible por 3." : "";
}

function verificarDivisibilidadPorTres(numero) {
    return numero % 3 === 0 ? "Es divisible por 3." : "";
}

function verificarDivisibilidadPorCinco(numero) {
    return numero % 5 === 0 ? "Es divisible por 5." : "";
}

function verificarDivisibilidadPorSiete(numero) {
    return numero % 7 === 0 ? "Es divisible por 7." : "";
}