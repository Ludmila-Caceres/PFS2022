"use strict";
exports.__esModule = true;
//ejemplo
var haceFrio = true;
var estaLloviendo = false;
if (haceFrio) {
    if (estaLloviendo) {
        console.log('Me quedo en casa');
    }
    else {
        console.log('Vengo al curso del CFL');
    }
}
//otro ejemplo
var hayUnaPila = true;
if (hayUnaPila) {
    console.log('quito pila');
}
else {
    console.log('lleno agujero');
}
//mayor a
var rls = require("readline-sync");
var nroDeseado = rls.questionInt("Escriba el número de desea verificar si es mayor o no a 20: ");
if (nroDeseado > 20) {
    console.log("el numero es mayor a 20:" + nroDeseado);
}
else {
    console.log("el numero es menor o igual a 20: " + nroDeseado);
}
//otro
var lucesEncendidas = true;
var litrosNafta = 10;
if (lucesEncendidas && litrosNafta > 0) {
    console.log('Puedo manejar de noche');
}
