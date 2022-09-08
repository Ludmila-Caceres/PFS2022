"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//calculadora
var i, linea;
var numero1 = rls.questionInt('Ingrese un número: ');
var numero2 = rls.questionInt('Ingrese un número: ');
var opcionMenu = rls.questionInt('Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ');
//modularizacion
function dibujarGuiones(n) {
    var i;
    var linea = "";
    for (i = 1; i <= n; i++) { //;i<=cantidad acá y listo;
        linea += "-";
    }
    ;
    console.log(linea);
}
if (opcionMenu == 1) {
    dibujarGuiones(20);
    console.log('El resultado es: ', numero1 + numero2);
    dibujarGuiones(20);
}
else if (opcionMenu == 2) {
    dibujarGuiones(30);
    console.log('el resultado es: ', numero1 - numero2);
    dibujarGuiones(30);
}
