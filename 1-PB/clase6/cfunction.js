"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
function dibujar(numero, simbolo) {
    var linea = simbolo.toString();
    for (i = 0; i <= numero; i++) {
        linea = linea + simbolo;
    }
    console.log(linea);
}
var i, linea;
var numero1 = rls.questionInt('ingrese un número: ');
var numero2 = rls.questionInt('ingrese un número: ');
var opcionMenu = rls.questionInt('ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ');
if (opcionMenu == 1) {
    dibujar(40, 6);
    console.log('el resultado es: ', numero1 + numero2);
    dibujar(40, 7);
}
else {
    dibujar(30, 1);
    console.log('el resultado es: ', numero1 - numero2);
    dibujar(30, 3);
}
