"use strict";
exports.__esModule = true;
//suma entre números invertidos 
var rls = require("readline-sync");
var primerNum = rls.questionInt('Ingrese el primer número: ');
var segundoNum = rls.questionInt('Ingrese el segundo número: ');
var actual, suma, aux;
actual = primerNum;
if (primerNum > segundoNum) {
    aux = primerNum;
    primerNum = segundoNum;
    segundoNum = aux;
}
suma = 0;
for (actual = primerNum; actual <= segundoNum; actual++) {
    suma = suma + actual;
}
console.log("el resultado de la suma es: ", suma);
