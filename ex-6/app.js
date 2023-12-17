/*Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.  */

function encontrarMayor() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);


    var mayor = Math.max(numero1, numero2, numero3);

    document.getElementById("resultado").innerHTML = "El número mayor es: " + mayor;
}