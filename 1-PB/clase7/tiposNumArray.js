"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var cantidad = rls.questionInt('ingrese la cantidad de nros:');
var v = new Array(cantidad);
var indice;
for (indice = 0; indice < cantidad; indice++) {
    v[indice] = rls.questionInt('ingrese v[${indice}]:');
}
var numNeg = 0;
var numCero = 0;
var numPos = 0;
for (indice = 0; indice < cantidad; indice++) {
    if (v[indice] == 0) {
        numCero++;
    }
    else if (v[indice] > 0) {
        numPos++;
    }
    else {
        numNeg++;
    }
}
console.log("Hay ".concat(numPos, " positivos, ").concat(numNeg, " negativos, ").concat(numCero, " ceros."));
