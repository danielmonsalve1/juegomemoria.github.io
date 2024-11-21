//variables globales
let nombreJugador = d.querySelector(".jugador");
let listaJugadores = "jugadores";

//funcion para obtener los datos
function obtenerDatos() {
    //crear objetos para los datos del jugador
    let datosJugador = {
        "nombre": nombreJugador.textContent,
        "intentos": totalIntentos,
        "tiempoTotal": totalTiempo,
        "tiempoSobrante": tiempoSobrante
    }
    //mostrar los datos en consola
    console.log(datosJugador);
    //pasar los datos del jugador
    guardarDatos(datosJugador);
}

//funcion para guardar los datos en localstorage
function guardarDatos(datos) {
    //array para los datos antiguos
    let jugadores = [];
    //tomar los datos en localstorage previamente guardados
    let datosPrevios = JSON.parse( localStorage.getItem(listaJugadores));
    if ( datosPrevios != null ) {
        jugadores = datosPrevios;
    }
    //guardar el nuevo jugador en el array
    jugadores.push(datos);
    //guardar todo los datos en localstorage
    localStorage.setItem(listaJugadores, JSON.stringify(jugadores));
}

function mostrarDatos() {
    //array para los datos antiguos
    let jugadores = [];
    //tomar los datos en localstorage previamente guardados
    let datosPrevios = JSON.parse( localStorage.getItem(listaJugadores));
    if ( datosPrevios != null ) {
        jugadores = datosPrevios;
    }
    //organizar los jugadores
    jugadores.sort((a, b) => {
        if (a.intentos < b.intentos) {
            return -1; // El jugador con menos intentos va primero
        } else if (a.intentos > b.intentos) {
            return 1; // El jugador con más intentos va después
        } else {
            // Si tienen los mismos intentos, usar el tiempo total como criterio secundario
            return a.tiempoTotal - b.tiempoTotal;
        }
    });


    //mostrar los datos en la tabla
    jugadores.forEach((jugador, i) => {
        //crear fila
        let fila = d.createElement("tr");
        fila.innerHTML = `
            <td> ${i+1} </td>
            <td> ${jugador.nombre} </td>
            <td> ${jugador.tiempoTotal} </td>
            <td> ${jugador.intentos} </td>
            <td> ${jugador.tiempoSobrante} </td>
        `;
        tabla.appendChild(fila);
    });

}

