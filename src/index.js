import cipher from "./cipher.js";

console.log(cipher);

window.addEventListener("load", inicio, true);

function inicio() {
  document.getElementById("m1").addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();
  });
  document.getElementById("cifrar").addEventListener("click"),
    function () {
      let m1 = document.getElementById("m1").value;
      let espacio = document.getElementById("espacio").value;
      document.getElementById("m2").value = cifrar(m1, espacio);
    };
  document.getElementById("descifrar").addEventListener("click"),
    function () {
      let m1 = document.getElementById("m1").value;
      let espacio = document.getElementById("espacio").value;
      document.getElementById("m2").value = descifrar(m1, espacio);
    };
}
