const primerLink = document.querySelector("#primerLink");

if (primerLink) {
  primerLink.addEventListener("click", () => {
    primerLink.querySelector(".hoja").style.transform =
      "translateY(-1px) scale(.995)";
    setTimeout(() => {
      primerLink.querySelector(".hoja").style.transform = "";
    }, 120);
  });
}