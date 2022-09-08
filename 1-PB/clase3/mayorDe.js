"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numero1 = rls.questionInt("primer nro: ");
var numero2 = rls.questionInt("segundo nro: ");
var numero3 = rls.questionInt("tercer nro: ");
if (numero1 > numero2 && numero1 > numero3) {
    console.log("el numero" + numero1 + " es el mayor");
}
else if (numero2 > numero1 && numero2 > numero3) {
    console.log("el numero" + numero2 + "es el mayor");
}
else if (numero3 > numero1 && numero3 > numero2) {
    console.log("el numero" + numero3 + "es el mayor");
}
