import cipher from "./cipher.js";

window.addEventListener("load", inicio, true);

//Esta función es para acceder a los ID que se utilizarán del DOM

function inicio() {
  document.getElementById("m1").addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();
  });
  document.getElementById("cifrar").addEventListener("click", function () {
    const string = document.getElementById("m1").value;
    const offset = document.getElementById("espacio").value;
    document.getElementById("m2").value = cipher.encode(offset, string);
  });
  document.getElementById("descifrar").addEventListener("click", function () {
    const string = document.getElementById("m1").value;
    const offset = document.getElementById("espacio").value;
    document.getElementById("m2").value = cipher.decode(offset, string);
  });
}
