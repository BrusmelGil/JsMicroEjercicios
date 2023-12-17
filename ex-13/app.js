/*Escribir un programa que escriba en pantalla los divisores de un número dado */

function mostrarDivisores() {

    var numero = parseInt(document.getElementById("numero").value);


    var divisores = obtenerDivisores(numero);


    document.getElementById("resultado").textContent = "Los divisores de " + numero + " son: " + divisores.join(", ");
}

function obtenerDivisores(numero) {
    var divisores = [];

    for (var i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    return divisores;
}