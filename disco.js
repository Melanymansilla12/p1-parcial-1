class Disco {
    static #idsExistentes = [];

    constructor(nombre, autor, portada, id) {
        this.nombre = nombre;
        this.autor = autor;
        this.portada = portada;
        this.id = id;
        this.listaPistas = [];
        this.cantidadPistas = 0;
    }

    static pedirNombre() {
        return this.#validarTexto('Por favor, ingrese el título del disco');
    }

    static pedirAutor() {
        return this.#validarTexto('Por favor, ingrese el artista del disco');
    }

    static pedirCodigo() {
        return this.#validarId(); 
    }

    static pedirPortada() {
        return this.#validarTexto('Por favor, ingrese la URL de la carátula del disco');
    }

    static #validarTexto(mensaje = "") {
        let entrada;
        let esValido = false;

        do {
            entrada = prompt(mensaje);

            if (entrada === null) {
                alert('Operación cancelada. Intente nuevamente.');
                esValido = false;
            } else if (entrada.trim() === "") {
                alert('Ingrese texto, no se puede dejar el campo vacío');
                esValido = false;
            } else {
                esValido = true;
            }
        } while (!esValido);

        return entrada;
    }

    static #validarId() {
        let entrada;
        let esValido = false;
    
        do {
            entrada = parseInt(prompt('Ingrese el ID numérico único del disco'));
    
            if (isNaN(entrada)) {
                alert('Por favor, ingrese un número válido.');
            } else if (entrada < 1) {
                alert('El ID debe ser mayor o igual a 1.');
            } else if (entrada > 999) {
                alert('El ID no puede ser mayor que 999.');
            } else {
               
                const idExistente = this.#idsExistentes.includes(entrada);
                if (idExistente) {
                    alert('Este ID ya existe. Por favor, ingrese un ID único.');
                } else {
                    this.#idsExistentes.push(entrada); 
                    esValido = true;
                }
            }
        } while (!esValido);
    
        return entrada;
    }

    cargarPistas() {
        this.cantidadPistas = 0;

        do {
            let nombrePista = Pista.solicitarNombrePista();
            let duracionPista = Pista.solicitarDuracion();

            let nuevaPista = new Pista(nombrePista, duracionPista);
            this.listaPistas.push(nuevaPista);
            this.cantidadPistas++;
        } while (confirm('¿Desea añadir otra pista?'));
    }

    generarHTML() {
        let contenidoHTML = "";

        contenidoHTML += `<div class="discos">`;
        contenidoHTML += `<h3>${this.nombre}</h3>`;
        contenidoHTML += `<h4>${this.autor}</h4>`;
        contenidoHTML += `<div class="informacionDiscos">`;
        contenidoHTML += `<div id="img"><img src="${this.portada}"></div>`;
        contenidoHTML += `<p>Código disco: ${this.id}</p>`;
        contenidoHTML += `<p>Cantidad de pistas: ${this.cantidadPistas}</p>`;
        contenidoHTML += `</div>`;

        contenidoHTML += `<div class="totalPistas">`;
        contenidoHTML += `<h5>Pistas</h5>`;
        
        contenidoHTML += `<ul>`;

        for (let pista of this.listaPistas) {
            const duracionFormateada = Pista.convertirSegundos(pista.duracion);
            contenidoHTML += `<li${pista.duracion > 180 ? ' style="color: green;"' : ''}>${pista.nombre} - ${duracionFormateada}</li>`;
        }

        contenidoHTML += `</ul></div></div>`;

        return contenidoHTML;
    }
}