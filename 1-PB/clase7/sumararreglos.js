"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var v1 = new Array(6);
var v2 = new Array(6);
var vSuma = new Array(6);
function cargarVector(v, cantidad) {
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        v[indice] = rls.questionInt('ingrese el valor de la posicion', indice, ":");
    }
}
function mostrarVector(v, cantidad) {
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        console.log(v[indice], " ");
    }
}
function sumarVector(v1, v2, vSuma, cantidad) {
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        vSuma[indice] = v1[indice] + v2[indice];
    }
}
console.log("cargando v1");
cargarVector(v1, 6);
console.log('cargando v2');
cargarVector(v2, 6);
sumarVector(v1, v2, vSuma, 6);
console.log('valores de v1');
mostrarVector(v1, 6);
console.log('valores de v2');
mostrarVector(v2, 6);
console.log("valores de vSuma");
mostrarVector(vSuma, 6);
