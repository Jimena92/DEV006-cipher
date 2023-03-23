// Objeto cipher con dos métodos para cifrar y descifrar un string.
const cipher = {
  encode: function (offset, string) {
    // Se comprueba que el parámetro 'string' no esté vacío.
    if (typeof string !== "string" || string.length === 0) {
      throw new TypeError("No debe dejar vacío el campo.");
    }

    // Se inicializa la variable 'resultado' como string vacío.
    let resultado = "";

    // Se establece el valor de 'offset' para que esté en el rango 0-25.
    offset = ((offset % 26) + 26) % 26;

    // Se comprueba si el parámetro 'string' es un string válido, por eso se usa un If.
    if (string) {
      // Se agrega un for y se itera por cada caracter en el string
      for (let i = 0; i < string.length; i++) {
        /*Por fin logré integrar el método ASCII, acá entendí que se obtiene el código ASCII del caracter actual*/
        const currentCharCode = string.charCodeAt(i);
        /* Esta parte es para saber si el caracter es una letra mayúscula en ASCII y si cumple con eso, entonces se cifra.*/
        if (currentCharCode >= 65 && currentCharCode <= 90) {
          // Se calcula la posición del caracter cifrado en el alfabeto.
          let posicion = (currentCharCode - 65 + offset) % 26;
          // Si la posición es negativa, se ajusta para que quede en el rango de 0 a 25.
          if (posicion < 0) {
            posicion += 26;
          }
          // Se agrega la letra cifrada al string "resultado".
          resultado += String.fromCharCode(posicion + 65);
          // Si el caracter actual no es una letra mayúscula, se agrega tal cual al string "resultado".
        } else {
          resultado += string[i];
        }
      }
    }
    // Se retorna el string 'resultado' cifrado
    return resultado;
  },

  //Para el decode es prácticamente lo mismo sólo en la condiconal de currentCharCode, la variable posicón queda en negativo

  decode: function (offset, string) {
    if (typeof string !== "string" || string.length === 0) {
      throw new TypeError("No debe dejar vacío el campo.");
    }
    let resultado = "";
    offset = ((offset % 26) + 26) % 26;
    if (string) {
      for (let i = 0; i < string.length; i++) {
        const currentCharCode = string.charCodeAt(i);
        if (currentCharCode >= 65 && currentCharCode <= 90) {
          let posicion = (currentCharCode - 65 - offset) % 26;
          if (posicion < 0) {
            posicion += 26;
          }
          resultado += String.fromCharCode(posicion + 65);
        } else {
          resultado += string[i];
        }
      }
    }
    return resultado;
  },
};

export default cipher;
