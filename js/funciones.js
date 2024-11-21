//variables globales
const d = document;
let imgN1 = [
    { nombre: "westcol", url: "imagenes/westcol.jpeg" },
    { nombre: "anuel", url: "imagenes/anuel.jpeg" },
    { nombre: "blessed", url: "imagenes/blessed.jpeg" },
    { nombre: "ryancastro", url: "imagenes/ryancastro.jpg" },
    { nombre: "jbalvin", url: "imagenes/jbalvin.jpeg" },
    { nombre: "crisvalencia", url: "imagenes/crisvalencia.jpeg" },
    { nombre: "malumal", url: "imagenes/maluma.jpeg" },
    { nombre: "feid", url: "imagenes/feidd.jpeg" },
    { nombre: "westcol", url: "imagenes/westcol.jpeg" },
    { nombre: "anuel", url: "imagenes/anuel.jpeg" },
    { nombre: "blessed", url: "imagenes/blessed.jpeg" },
    { nombre: "ryancastro", url: "imagenes/ryancastro.jpg" },
    { nombre: "jbalvin", url: "imagenes/jbalvin.jpeg" },
    { nombre: "crisvalencia", url: "imagenes/crisvalencia.jpeg" },
    { nombre: "malumal", url: "imagenes/maluma.jpeg" },
    { nombre: "feid", url: "imagenes/feidd.jpeg" },
];
let imgN2 = [
    { nombre: "westcol", url: "imagenes/westcol.jpeg" },
    { nombre: "anuel", url: "imagenes/anuel.jpeg" },
    { nombre: "blessed", url: "imagenes/blessed.jpeg" },
    { nombre: "ryancastro", url: "imagenes/ryancastro.jpg" },
    { nombre: "jbalvin", url: "imagenes/jbalvin.jpeg" },
    { nombre: "crisvalencia", url: "imagenes/crisvalencia.jpeg" },
    { nombre: "malumal", url: "imagenes/maluma.jpeg" },
    { nombre: "feid", url: "imagenes/feidd.jpeg" },
    { nombre: "westcol", url: "imagenes/westcol.jpeg" },
    { nombre: "anuel", url: "imagenes/anuel.jpeg" },
    { nombre: "blessed", url: "imagenes/blessed.jpeg" },
    { nombre: "ryancastro", url: "imagenes/ryancastro.jpg" },
    { nombre: "jbalvin", url: "imagenes/jbalvin.jpeg" },
    { nombre: "crisvalencia", url: "imagenes/crisvalencia.jpeg" },
    { nombre: "malumal", url: "imagenes/maluma.jpeg" },
    { nombre: "feid", url: "imagenes/feidd.jpeg" },
    { nombre: "arcangel", url: "imagenes/arcangel.jpg" },
    { nombre: "nickyjam", url: "imagenes/nickyjam.jpg" },
    { nombre: "arcangel", url: "imagenes/arcangel.jpg" },
    { nombre: "nickyjam", url: "imagenes/nickyjam.jpg" },
];
let imgN3 = [
    { nombre: "westcol", url: "imagenes/westcol.jpeg" },
    { nombre: "anuel", url: "imagenes/anuel.jpeg" },
    { nombre: "blessed", url: "imagenes/blessed.jpeg" },
    { nombre: "ryancastro", url: "imagenes/ryancastro.jpg" },
    { nombre: "jbalvin", url: "imagenes/jbalvin.jpeg" },
    { nombre: "crisvalencia", url: "imagenes/crisvalencia.jpeg" },
    { nombre: "malumal", url: "imagenes/maluma.jpeg" },
    { nombre: "feid", url: "imagenes/feidd.jpeg" },
    { nombre: "westcol", url: "imagenes/westcol.jpeg" },
    { nombre: "anuel", url: "imagenes/anuel.jpeg" },
    { nombre: "blessed", url: "imagenes/blessed.jpeg" },
    { nombre: "ryancastro", url: "imagenes/ryancastro.jpg" },
    { nombre: "jbalvin", url: "imagenes/jbalvin.jpeg" },
    { nombre: "crisvalencia", url: "imagenes/crisvalencia.jpeg" },
    { nombre: "malumal", url: "imagenes/maluma.jpeg" },
    { nombre: "feid", url: "imagenes/feidd.jpeg" },
    { nombre: "arcangel", url: "imagenes/arcangel.jpg" },
    { nombre: "nickyjam", url: "imagenes/nickyjam.jpg" },
    { nombre: "arcangel", url: "imagenes/arcangel.jpg" },
    { nombre: "nickyjam", url: "imagenes/nickyjam.jpg" },
    { nombre: "porsche", url: "imagenes/porsche-logo.jpg" },
    { nombre: "lambo", url: "imagenes/lambo-logo.jpg" },
    { nombre: "porsche", url: "imagenes/porsche-logo.jpg" },
    { nombre: "lambo", url: "imagenes/lambo-logo.jpg" },
];

let nombreImg = []; //guardar nombres
let posImg = []; //guardar posiciones
let tablero = d.querySelector(".tablero"); //tablero del juego
let aciertos = 0;
let totalIntentos = 0;
let totalTiempo = 0;
let tiempoSobrante = 0;
let intentos = 0;
let tiempo = 130;
let nivel = 1;
let mostrarNivel = d.querySelector(".nivel");
let mostrarIntentos = d.querySelector(".intentos");
let mostrarAciertos = d.querySelector(".aciertos");
let mostrarTiempo = d.querySelector(".tiempo");
let tiempoTranscurrido;
let btn_iniciar = d.querySelector(".btn-iniciar");
let imagenNivel;
let estoyJugando = false;
let sonidoSeleccionar = new Audio("./sonidos/click-s.mp3");
let sonidoAdivinar = new Audio("./sonidos/correcto.mp3");
let sonidoError = new Audio("./sonidos/errorsonido.mp3");
let sonidoFinish = new Audio("./sonidos/finish.mp3");
let sonidoPerdio = new Audio("./sonidos/gameover.mp3");
let sonidoSegundos = new Audio("./sonidos/10segundos.mp3");
let mostrarJugador = d.querySelector(".jugador");
let tabla = d.querySelector(".records tbody");
let fondoBody = d.querySelector("body");


//setTimeout()//ejecuta una vez cuando pasa determinado tiempo
//setInterval()// se ejecuta en determinado tiempo infinitamente

d.addEventListener("DOMContentLoaded", ()=>{
    fondoBody.classList.add("fondo1");
    mostrarDatos();
});


//agregar evento al boton para iniciar el juego
btn_iniciar.addEventListener("click", function () {
    // alert("juego iniciado");
    // comprobar que el juego este activo
    if ( estoyJugando == false && nivel == 1) {
        ventanaModal();  
}else if (estoyJugando == false && nivel == 2) {
    estoyJugando = true;
    nivel2();
}else if (estoyJugando == false && nivel == 3) {
    estoyJugando = true;
    nivel3();
}
    });


//funcion para agregar las imagenes al tablero
function agregarImagenes() {
    //agregar imagenes dependiendo del nivel
    if (nivel == 1) {
        imagenNivel = imgN1;
    }else if (nivel == 2) {
        imagenNivel = imgN2;
    }else if (nivel == 3) {
        imagenNivel = imgN3;
    }

    //colocar imagenes aleatorias
imagenNivel.sort(()=>Math.random() -0.5);

    imagenNivel.forEach((img, i)=> {
        let div = d.createElement("div"); //crear etiqueta div
        div.className = "col-3"; //aregar al div la clase col-3
        let imagen = d.createElement("img"); //crear la etiqueta de imagen
        imagen.className = "img-fluid altura-img"; //para que la imagen se adapte al tamaño de la columna
        imagen.src = "imagenes/fondosupreme.jpeg"; //agregar la ubicacion de la imagen
        imagen.id = i; //agregar id a las imagenes
        imagen.addEventListener("click", mostrarImagenes); //
        div.appendChild(imagen); //agregar la imagen al div
        tablero.appendChild(div); //agregar div al tablero
    });
}
//funcion para mostrar las imagenes ocultas
function mostrarImagenes() {
    sonidoSeleccionar.play();
    //obtener el id de la imagen en el tablero
    let imagenID = this.getAttribute("id");
    //mostrar imagen
    this.src = imagenNivel[imagenID].url; //cambiar las url de las imagenes
    nombreImg.push( imagenNivel[imagenID].nombre ); //guardar nombres
    posImg.push(imagenID); //guardar las posiciones
    // alert("id de la imagen: "+imagenID);
    //validar si se muestran 2 imagenes
    if (nombreImg.length == 2) {
        setTimeout( compararImagenes, 250 );
        //compararImagenes();
    }
}

//funcion para comparar las imagenes
function compararImagenes() {
    let imagenesTablero = document.querySelectorAll(".tablero .col-3 img");
    //validar si las imagenes se llama igual
    if (nombreImg[0] == nombreImg[1]) {
        if (posImg [0] != posImg[1]) {
            sonidoAdivinar.play();
            imagenesTablero[ posImg[0] ].src = "imagenes/fondo2supreme.jpg";
            imagenesTablero[ posImg[1] ].src = "imagenes/fondo2supreme.jpg";
            imagenesTablero[ posImg[0] ].removeEventListener("click", mostrarImagenes);
            imagenesTablero[ posImg[1] ].removeEventListener("click", mostrarImagenes);
            aciertos++;
            mostrarAciertos.textContent = aciertos;
        }else{
            // alert("Debes escoger otra imagen");
            imagenesTablero[ posImg[0] ].src = "imagenes/fondosupreme.jpeg";
            intentos++;
            mostrarIntentos.textContent = intentos;
        }
        
        
    }else{
        // alert("No mero malo :(")
        sonidoError.play();
        imagenesTablero[ posImg[0] ].src = "imagenes/fondosupreme.jpeg";
        imagenesTablero[ posImg[1] ].src = "imagenes/fondosupreme.jpeg";
        intentos++;
        mostrarIntentos.textContent = intentos;
    }
    //reiniciar las variables
    nombreImg = [];
    posImg = [];

    //comprobar si se adivinaron todas las imagenes
    if (nivel == 1 && aciertos == 8) {
        alert("😁FELICITACIONES PASASTE AL SIGUIENTE NIVEL!!😁");
        fondoBody.classList.replace("fondo1", "fondo2");
        //recargar la pagina
        // location.reload();
        totalIntentos += intentos;
        totalTiempo += tiempo;
        tiempoSobrante += (120 - tiempo);
        obtenerDatos();
        sonidoFinish.play();
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido);
        tiempo = 120;
        mostrarTiempo.textContent = tiempo;
        estoyJugando = false;
        quitarImg();

    }else if ( nivel == 2 && aciertos == 10 ) {
        alert("😁FELICITACIONES PASASTE AL SIGUIENTE NIVEL!!😁");
        fondoBody.classList.replace("fondo2", "fondo3");
        sonidoFinish.play();
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido);
        tiempo = 110;
        mostrarTiempo.textContent = tiempo;
        estoyJugando = false;
        quitarImg();
    }else if ( nivel == 3 && aciertos == 12 ) {
        alert("😁FELICITACIONES GANASTE EL JUEGO!!😁");
        sonidoFinish.play();
        location.reload();
    }


}

function nivel1() {
       //agregar las imagenes al tablero
       agregarImagenes();
       mostrarNivel.textContent = nivel;
       tiempoDeJuego();
}

function nivel2() {
    //agregar las imagenes al tablero
    agregarImagenes();
    tiempoDeJuego();
}

function nivel3() {
    //agregar las imagenes al tablero
    agregarImagenes();
    tiempoDeJuego();
}

function tiempoDeJuego() {
      //controlar el tiempo del juego
tiempoTranscurrido = setInterval( ()=>{
    tiempo--;
    mostrarTiempo.textContent = tiempo;
    if (tiempo == 10) {
       alert("Rapido!! el tiempo se agota!!😱");
       sonidoSegundos.play();
       mostrarTiempo.classList.add("tiempo-agotado");
    }else if (tiempo == 0) {
        alert("El tiempo se agoto, ¡PERDISTE! >:(")
        sonidoPerdio.play();
        clearInterval(tiempoTranscurrido);
        setTimeout(()=>{
            location.reload();
        }, 3000)
    }
}, 1000);
}

function quitarImg() {
    let imagenQuitar = d.querySelectorAll(".tablero div");
    imagenQuitar.forEach((img) => {
        img.remove();
    });
}

//mostrar Ventana modal
function ventanaModal() {
    let mostrarModal = d.querySelector("#exampleModal");
    let cerrarModal = d.querySelectorAll(".cerrar");
    let inputJugador = d.querySelector(".nombre-jugador");
    let btnJugador = d.querySelector(".registrar-jugador");
    //botones para cerrar ventana modal
    cerrarModal.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            mostrarModal.classList.remove("show");
            mostrarModal.style.display = "none";
        });
    });
    //mostrar la venta modal
    mostrarModal.classList.add("show");
    mostrarModal.style.display = "block";
    //Evento click al boton azul del modal
    btnJugador.addEventListener("click", ()=>{
        //mostrar el nombre en el tablero
        mostrarJugador.textContent = inputJugador.value;
        //cerrar ventana modal
        mostrarModal.classList.remove("show");
            mostrarModal.style.display = "none";
            //iniciar nivel 1
            estoyJugando = true;
            nivel1();
    });
}




