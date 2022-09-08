"use strict";
exports.__esModule = true;
//algoritmo suma entre numeros con for
var rls = require("readline-sync");
var numIngresado = rls.questionInt("Qué tabla desea? ");
var hasta = rls.questionInt("Hasta qué número desea? ");
var resultado = 0;
for (var contador = 1; contador <= hasta; contador++) {
    resultado = numIngresado * contador;
    console.log(numIngresado, "x", contador, "=", resultado);
}
