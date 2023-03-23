// importar el módulo cipher.js en el archivo actual
import cipher from "./cipher.js";

window.addEventListener("load", inicio, true);

/*Esta función es para acceder a los ID que se utilizarán del DOM y se ejecutará en el evento load*/

function inicio() {
  // Se agrega un evento de teclado a la entrada con el id "m1"
  // la función del evento convierte el valor de la entrada en mayúsculas
  document.getElementById("m1").addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();
  });

  /* Se agrega un evento de clic al botón con el id "cifrar"
  La función del evento toma el valor de la entrada con el id "m1" y el valor del espacio de cifrado (offset), luego llama a la función "encode" del módulo cipher.js con los parámetros anteriores y actualiza el valor de la entrada con el id "m2" con el resultado cifrado.*/

  document.getElementById("cifrar").addEventListener("click", function () {
    const string = document.getElementById("m1").value;
    const offset = document.getElementById("espacio").value;
    document.getElementById("m2").value = cipher.encode(offset, string);
  });

  //Se realiza lo mismo que lo anterior, pero esta vez con la función decode
  document.getElementById("descifrar").addEventListener("click", function () {
    const string = document.getElementById("m1").value;
    const offset = document.getElementById("espacio").value;
    document.getElementById("m2").value = cipher.decode(offset, string);
  });
}
