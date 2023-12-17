/* Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales*/

function contarVocales() {
    
    var frase = document.getElementById("frase").value;


    var conteoVocales = contarVocalesEnFrase(frase);


    mostrarResultado(conteoVocales);
}

function contarVocalesEnFrase(frase) {
    
    frase = frase.toLowerCase();

    // Se inicia un objeto para almacenar el conteo de cada vocal
    var conteoVocales = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    };

    // Se Cuentan las vocales en la frase y se actualiza el objeto de conteo
    Array.from(frase).forEach(function(caracter) {
        if (/[aeiouáéíóú]/.test(caracter)) {
            conteoVocales[caracter]++;
        }
    });

    return conteoVocales;
}

function mostrarResultado(conteoVocales) {
    var resultadoHTML = "Apariciones de vocales:<br>";
    for (var vocal in conteoVocales) {
        resultadoHTML += vocal + ": " + conteoVocales[vocal] + "<br>";
    }


    document.getElementById("resultado").innerHTML = resultadoHTML;
}