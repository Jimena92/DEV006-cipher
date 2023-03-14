import cipher from "./cipher.js";

console.log(cipher);

window.addEventListener("load", inicio, true);
//Esta función es para acceder a los ID que se utilizarán del DOM

function inicio() {
  document.getElementById("m1").addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();
  });
  document.getElementById("cifrar").addEventListener("click", function () {
    const texto = document.getElementById("m1").value;
    const desplazamiento = document.getElementById("espacio").value;
    document.getElementById("m2").value = cifrar(texto, desplazamiento);
  });
  document.getElementById("descifrar").addEventListener("click", function () {
    const texto = document.getElementById("m1").value;
    const desplazamiento = document.getElementById("espacio").value;
    document.getElementById("m2").value = descifrar(texto, desplazamiento);
  });
}

function cifrar(texto, desplazamiento) {
  let resultado = "";
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //Este módulo es para aceptar un desplazamiento negativo
  desplazamiento = ((desplazamiento % 26) + 26) % 26;
  /*Se crea una condicional y un bucle para saber el desplazamiento y a qué letra se va a llegar, lo logré pero
 siento que falta algo más, además no he metido lo de ASCII*/
  if (texto) {
    for (let i = 0; i < texto.length; i++) {
      if (letras.indexOf(texto[i]) !== -1) {
        const posicion = (letras.indexOf(texto[i]) + desplazamiento) % 26;
        resultado += letras[posicion];
      } else resultado += texto[i];
    }
  }
  return resultado;
}

/*Aquí haré la función pero ahora para descifrar, aún no entiendo bien como. Aunque creo que es algo parecida a cifrar*/
