/*Escribe un programa que pida una frase y escriba las vocales que aparecen */


function mostrarVocales() {

    var frase = document.getElementById("frase").value;

    // Filtra las vocales en la frase
    var vocales = frase.match(/[aeiou]/gi);

    
    if (vocales) {
        document.getElementById("resultado").textContent = "Las vocales en la frase son: " + vocales.join(", ");
    } else {
        document.getElementById("resultado").textContent = "No se encontraron vocales en la frase.";
    }
}