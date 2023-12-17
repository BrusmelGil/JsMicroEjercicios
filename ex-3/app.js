//3. Escribe un programa que pida el nombre del usuario con un input y escriba un texto que 
//diga “Hola <nombre-de-usuario>”


function saludar() {

    var nombreUsuario = document.getElementById('nombre').value;

    var saludoElement = document.getElementById('saludo');
    saludoElement.textContent = 'Hola ' + nombreUsuario + '!';
}