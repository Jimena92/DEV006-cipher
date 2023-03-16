import cipher from "./cipher.js";

console.log(cipher);

window.addEventListener("load", inicio, true);
//Esta función es para acceder a los ID del DOM

function inicio() {
  document.getElementById("m1").addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();
  });
  document.getElementById("cifrar").addEventListener("click", function () {
    const string = document.getElementById("m1").value;
    const offset = document.getElementById("espacio").value;
    document.getElementById("m2").value = encode(offset, string);
  });
  document.getElementById("descifrar").addEventListener("click", function () {
    const string = document.getElementById("m1").value;
    const offset = document.getElementById("espacio").value;
    document.getElementById("m2").value = decode(offset, string);
  });
}

function encode(offset, string) {
  let resultado = "";
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //Este módulo es para aceptar un desplazamiento negativo
  offset = ((offset % 26) + 26) % 26;
  /*Se crea una condicional y un bucle para saber el desplazamiento y a qué letra se va a llegar, lo logré pero
 no he metido lo de ASCII*/
  if (string) {
    for (let i = 0; i < string.length; i++) {
      if (letras.indexOf(string[i]) !== -1) {
        const posicion = (letras.indexOf(string[i]) + offset) % 26;
        resultado += letras[posicion];
      } else resultado += string[i];
    }
  }
  return resultado;
}

/*La función descifrar es muy parecida  a cifrar sólo se coloca en negativo*/

function decode(offset, string) {
  let resultado = "";
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  offset = ((offset % 26) + 26) % 26;
  if (string) {
    for (let i = 0; i < string.length; i++) {
      if (letras.indexOf(string[i]) !== -1) {
        const posicion = (letras.indexOf(string[i]) - offset) % 26;
        resultado += letras[posicion];
      } else resultado += string[i];
    }
  }
  return resultado;
}
