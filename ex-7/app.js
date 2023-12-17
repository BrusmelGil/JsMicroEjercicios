/*Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a */

function contarLetrasA() {
    const frase = document.getElementById("frase").value;
    const cantidadA = contarA(frase);
    document.getElementById("resultado").textContent = `La letra "a" aparece ${cantidadA} veces.`;
}

function contarA(texto) {
    const regex = /a/gi; // Expresión regular para buscar la letra "a" (ignorando mayúsculas/minúsculas)
    const matches = texto.match(regex);
    return matches ? matches.length : 0;
}