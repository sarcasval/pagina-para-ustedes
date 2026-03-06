const listaOjos = [
  "assets/1.jpg",
  "assets/2.jpg",
  "assets/3.jpg",
];

const listaNarices = [
  "assets/tronco1.jpg",
  "assets/tronco2.jpg",
  "assets/tronco3.jpg",
];

const listaBocas = [
  "assets/patas1.jpg",
  "assets/patas2.jpg",
  "assets/patas3.jpg",
];

const ojos = document.getElementById("ojo");
const nariz = document.getElementById("nariz");
const boca = document.getElementById("boca");
const boton = document.getElementById("boton");
const musica = document.getElementById("musicaFondo");

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generarBestia() {
  const ojosAleatorio = numeroAleatorio(0, listaOjos.length);
  const narizAleatorio = numeroAleatorio(0, listaNarices.length);
  const bocaAleatorio = numeroAleatorio(0, listaBocas.length);

  ojos.src = listaOjos[ojosAleatorio];
  nariz.src = listaNarices[narizAleatorio];
  boca.src = listaBocas[bocaAleatorio];
}

boton.addEventListener("click", function () {
  if (musica.paused) {
    musica.play();
  }

  generarBestia();
});

generarBestia();