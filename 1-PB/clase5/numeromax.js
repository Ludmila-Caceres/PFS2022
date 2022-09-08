"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var conIngresos = false;
var num = rls.questionInt("Ingrese un número: ");
var maxNum = num;
while (num != 0) {
    conIngresos = true;
    if (num > maxNum) {
        maxNum = num;
    }
}
if (conIngresos) {
    console.log("El máximo es: ", maxNum);
}
