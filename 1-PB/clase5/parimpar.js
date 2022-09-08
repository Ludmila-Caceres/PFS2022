"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numIngresado = rls.questionInt("Ingrese un número: ");
while (numIngresado <= 0) {
    var numIngresado_1 = rls.questionInt("Ingrese otro número (positivo): ");
}
if (numIngresado % 2 == 0) {
    console.log("El numero es par");
}
else {
    console.log("el numero es impar");
}
