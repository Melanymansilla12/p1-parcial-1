class Biblioteca {

    constructor() {
        this.listaDiscos = [];
    }

    agregarDisco() {
        let nombre = Disco.pedirNombre();
        let autor = Disco.pedirAutor();
        let portada = Disco.pedirPortada();
        let codigo = Disco.pedirCodigo();

        let nuevoDisco = new Disco(nombre, autor, portada, codigo);
        this.listaDiscos.push(nuevoDisco);
        nuevoDisco.cargarPistas();
    }

    generarHTML() {
        let html = '';
        for (let disco of this.listaDiscos) {
            html += disco.generarHTML();
        }
        return html;
    }

    buscarDiscoPorCodigo() {
        let codigoBuscado = Disco.pedirCodigo(); // Aquí obtienes el ID como número
        console.log("Buscando disco con ID:", codigoBuscado);
        
        let discosEncontrados = this.listaDiscos.filter(disco => disco.id === codigoBuscado); // Compara con disco.id
    
        let htmlResultado = '';
        if (discosEncontrados.length > 0) {
            for (let disco of discosEncontrados) {
                htmlResultado += disco.generarHTML();
            }
        } else {
            alert('El disco no existe');
        }
    
        document.querySelector("#discos").innerHTML = htmlResultado;
    }

}