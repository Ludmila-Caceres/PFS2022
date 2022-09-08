"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numero1 = rls.questionInt('Indique el número a verificar: ');
var numero2 = rls.questionInt('Indique el número múltiplo: ');
if (esMultiplo(numero1, numero2)) {
    console.log(numero1, "ES número múltiplo de ", numero2);
}
else {
    console.log(numero1, "NO es número múltiplo de ", numero2);
}
function esMultiplo(numero1, numero2) {
    return ((numero1 % numero2) == 0);
}
