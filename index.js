let biblioteca = new Biblioteca();

function mostrarDiscos() {
    document.querySelector("#discos").innerHTML = biblioteca.generarHTML();
}