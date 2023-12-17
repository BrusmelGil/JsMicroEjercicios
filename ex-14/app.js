/* Escribir un programa que escriba en pantalla los divisores comunes de dos números dados*/

function mostrarDivisoresComunes() {

    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);

    
    var divisores1 = obtenerDivisores(numero1);
    var divisores2 = obtenerDivisores(numero2);

    var divisoresComunes = obtenerDivisoresComunes(divisores1, divisores2);

    document.getElementById("resultado").textContent = "Los divisores comunes de " + numero1 + " y " + numero2 + " son: " + divisoresComunes.join(", ");
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

function obtenerDivisoresComunes(divisores1, divisores2) {
    return divisores1.filter(function(divisor) {
        return divisores2.indexOf(divisor) !== -1;
    });
}