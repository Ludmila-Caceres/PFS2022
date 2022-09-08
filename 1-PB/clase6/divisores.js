"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numero = rls.questionInt('Indique un número: ');
var cantDivisores = contarDivisores(numero);
console.log("el número ", numero, "tiene ", cantDivisores, 'divisores.');
function contarDivisores(numero) {
    var cantidad = 0;
    var divisor;
    for (divisor = 1; divisor <= numero; divisor++) {
        if (esMultiplo(numero, divisor)) {
            cantidad++;
        }
    }
    return cantidad;
}
function esMultiplo(numero1, numero2) {
    return ((numero1 % numero2) == 0);
}
