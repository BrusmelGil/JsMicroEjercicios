/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.*/ 

function compararNumeros() {
    
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);

    if (numero1 > numero2) {
        alert("El número " + numero1 + " es mayor.");
    } else if (numero2 > numero1) {
        alert("El número " + numero2 + " es mayor.");
    } else {
        alert("Los dos números son iguales.");
    }
}