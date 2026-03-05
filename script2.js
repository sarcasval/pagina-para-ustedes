const listaOjos = [
"assets/1.jpg",
"assets/2.jpg",
"assets/3.png"
];

const listaNarices = [
"assets/img/tronco1.jpg",
"assets/img/tronco2.jpg",
"assets/img/tronco3.jpg"
];

const listaBocas = [
"assets/img/patas1.jpg",
"assets/img/patas2.jpg",
"assets/img/patas3.png"
];

const ojos = document.getElementById("ojo");
const nariz = document.getElementById("nariz");
const boca = document.getElementById("boca");
const boton = document.getElementById("boton");

function numeroAleatorio(min,max){
return Math.floor(Math.random()*(max-min)+min);
}

function generarBestia(){

const ojosAleatorio = numeroAleatorio(0,listaOjos.length);
const narizAleatorio = numeroAleatorio(0,listaNarices.length);
const bocaAleatorio = numeroAleatorio(0,listaBocas.length);

ojos.src = listaOjos[ojosAleatorio];
nariz.src = listaNarices[narizAleatorio];
boca.src = listaBocas[bocaAleatorio];

}

boton.addEventListener("click",function(){
generarBestia();
});

generarBestia();