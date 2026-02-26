// Listas de imágenes
const listaOjos = [
  "assets/1.jpg",
  "assets/2.jpg",
  "assets/3.png",
];
const listaNarices = [
 "../base-bestiario/assets/img/tronco1.jpg",
  "../base-bestiario/assets/img/tronco2.jpg",
  "../base-bestiario/assets/img/tronco3.jpg",
];
const listaBocas = [
  "../base-bestiario/assets/img/patas1.jpg",
  "../base-bestiario/assets/img/patas2.jpg",
  "../base-bestiario/assets/img/patas3.png",
];

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const ojos = document.getElementById("ojo");
const nariz = document.getElementById("nariz");
const boca = document.getElementById("boca");
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let ojosAleatorio = 0;
let narizAleatorio = 0;
let bocaAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  ojosAleatorio = numeroAleatorio(0, listaOjos.length);
  narizAleatorio = numeroAleatorio(0, listaNarices.length);
  bocaAleatorio = numeroAleatorio(0, listaBocas.length);

  // Asignamos la nueva fuente (source) a cada imagen
  ojos.src = `${listaOjos[ojosAleatorio]}`; //ruta + listaCabezas[cabezaAleatorio];
  nariz.src = `${listaNarices[narizAleatorio]}`;
  boca.src = `${listaBocas[bocaAleatorio]}`;
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();