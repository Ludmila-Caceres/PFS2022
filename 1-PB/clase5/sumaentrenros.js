"use strict";
exports.__esModule = true;
//suma entre números con while 
var rls = require("readline-sync");
var primerNum = rls.questionInt('Ingrese el primer número: ');
var segundoNum = rls.questionInt('Ingrese el segundo número: ');
var actual, suma;
actual = primerNum;
suma = 0;
while (actual <= segundoNum) {
    suma = suma + actual;
    actual++;
}
console.log("el resultado de la suma es: ", suma);
