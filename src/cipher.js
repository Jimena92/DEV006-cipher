const cipher = {
  encode: function (offset, string) {
    if (typeof string !== "string" || string.length === 0) {
      throw new TypeError("No debe dejar vacío el campo.");
    }
    let resultado = "";
    //Este módulo es para aceptar un desplazamiento negativo, por eso se repite
    offset = ((offset % 26) + 26) % 26;
    if (string) {
      for (let i = 0; i < string.length; i++) {
        //Por fin logré integrar el método ASCII
        const currentCharCode = string.charCodeAt(i);
        if (currentCharCode >= 65 && currentCharCode <= 90) {
          let posicion = (currentCharCode - 65 + offset) % 26;
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
