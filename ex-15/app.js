/*Escribir un programa que nos diga si un número dado es
 primo (no es divisible por ninguno otro número que no sea él mismo o la unidad) */

function verificarPrimo() {
var numero = parseInt(document.getElementById("numero").value);

var esPrimo = esNumeroPrimo(numero);

if (esPrimo) {
    document.getElementById("resultado").textContent =
    numero + " es un número primo.";
} else {
    document.getElementById("resultado").textContent =
    numero + " no es un número primo.";
}
}

function esNumeroPrimo(numero) {
if (numero <= 1) {
    return false;
}

for (var i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
    return false;
    }
}

return true;
}