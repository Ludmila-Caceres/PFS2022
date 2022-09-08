"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var clave = "eureka";
var contador = 0;
var claveIngresada = "";
while (contador < 3 && claveIngresada != clave) {
    claveIngresada = rls.question("Introduzca la clave: ");
    contador++;
}
if (claveIngresada != clave) {
    console.log("Ya no tiene más intentos");
}
