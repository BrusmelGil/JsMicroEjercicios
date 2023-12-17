



function calcularSuma() {
    
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);

    //esto hara que le salte un error al usuario si no rellena los campos correctamente
/*   if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }
 */
    var resultado = numero1 + numero2;

    
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = "La suma de " + numero1 + " con " + numero2 + " es " + resultado + ".";
}
