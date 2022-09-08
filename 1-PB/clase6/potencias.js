"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var base = rls.questionInt('ingrese base: ');
var exponente = rls.questionInt('Ingrese exponente: ');
console.log('la potencia es= ', calcularPotencia(base, exponente));
function calcularPotencia(base, exponente) {
    var numero = 1;
    if (exponente == 0) {
        return 1;
    }
    else {
        for (var i = 1; i <= exponente; i++) {
            numero = numero * base;
        }
        ;
        return numero;
    }
}
