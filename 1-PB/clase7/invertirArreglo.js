"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//definir variables
var cantidad = rls.questionInt('ingrese la cantidad de números:');
var v = new Array(cantidad); //el tamaño del arreglo(cant)depende del usuario
var indice;
//cargar arreglo
for (indice = 0; indice < cantidad; indice++) { //"cantidad"como limit pq el tamaño es desconocido
    v[indice] = rls.questionInt('ingrese v[${indice}]:');
}
var cadena = "";
//desde el ult elemento  //m detengo en el 1o   //resto de a 1
for (indice = cantidad - 1; indice >= 0; indice--) {
    cadena = cadena + v[indice] + "";
}
console.log(cadena);
