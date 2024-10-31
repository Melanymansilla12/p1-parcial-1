class Pista {

    constructor(nombre, duracion) {
        this.nombre = nombre;
        this.duracion = duracion;
    }

    static solicitarNombrePista() {
        return this.#validarCadena('Por favor, ingrese el nombre de la pista');
    }

    static solicitarDuracion() {
        return this.#validarDuracion('Ingrese la duración de la pista (en segundos)');
    }

    static #validarCadena(mensaje = "") {
        let entrada;
        let esValido = false;

        do {
            entrada = prompt(mensaje);

            if (entrada === null) {
                alert('La acción fue cancelada, por favor inténtelo de nuevo');
                esValido = false;
            } else if (entrada.trim() === "") {
                alert('El nombre no puede estar vacío');
                esValido = false;
            } else {
                esValido = true;
            }

        } while (!esValido);

        return entrada;
    }

    static #validarDuracion(mensaje = "") {
        let entrada;
        let esValido = false;
    
        do {
            entrada = prompt(mensaje);
    
            if (isNaN(entrada)) {
                alert('Solo se permiten números. Inténtelo de nuevo.');
                esValido = false;
            }
            
            else if (entrada.trim() === "") {
                alert(' Ingrese números, no se puede dejar el campo vacío');
                esValido = false;}

            else {
                entrada = parseInt(entrada);
                if (entrada < 0) {
                    alert('La duración debe ser mayor o igual a 0 segundos');
                    esValido = false;
                } else if (entrada >= 7200) {
                    alert('La duración no puede exceder los 7200 segundos');
                    esValido = false;
                } else {
                    esValido = true;
                }
            }
            
        } while (!esValido);
    
    return entrada;
    }

    static convertirSegundos(segundos) {
        const minutos = Math.floor(segundos / 60);
        const seg = segundos % 60;

        // Asegurando que los minutos y segundos tengan dos dígitos
        const minutosFormateados = String(minutos).padStart(2, '0');
        const segundosFormateados = String(seg).padStart(2, '0');

        return `${minutosFormateados}:${segundosFormateados}`;
    }
}