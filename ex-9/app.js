/*Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase. */

function contarVocales() {

    var frase = document.getElementById("frase").value;


    var conteo = contarVocalesEnFrase(frase);

    document.getElementById("resultado").textContent = "El número de vocales en la frase es: " + conteo;
}

function contarVocalesEnFrase(frase) {
    
    frase = frase.toLowerCase();

    // Contar las vocales en la frase y devolver el total
    return Array.from(frase).filter(function(caracter) {
        return /[aeiouáéíóú]/.test(caracter);
    }).length;
}