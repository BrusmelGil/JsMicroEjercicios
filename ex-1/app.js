//1. Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”.

const title = "Hello Javascript ";
const titleSection = document.getElementById('title');

function printTitle() {

    titleSection.innerHTML = `

    <h1>${title}</h1>
    `
}

printTitle()