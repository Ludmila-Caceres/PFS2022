"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//calculadora
var i, linea;
var numero1 = rls.questionInt('Ingrese un número: ');
var numero2 = rls.questionInt('Ingrese un número: ');
var opcionMenu = rls.questionInt('Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ');
//opcion método
linea = "";
for (i = 0; i <= 40; i++) {
    linea = linea + "-";
}
;
if (opcionMenu == 1) {
    console.log(linea);
    console.log('El resultado es: ', numero1 + numero2);
    console.log(linea);
}
else if (opcionMenu == 2) {
    console.log(linea);
    console.log('el resultado es: ', numero1 - numero2);
    console.log(linea);
}
