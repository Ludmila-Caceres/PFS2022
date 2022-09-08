"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var usuario = "Juan";
var clave = "claveJuan";
var userIngresado = rls.question("Por favor ingrese el usuario: ");
var claveIngresada = rls.question("Por favor ingrese clave: ", { hideEchoBack: true });
if (usuario == userIngresado && clave == claveIngresada) {
    console.log("bienvenido");
}
else {
    console.log("usuario o clave incorrectos");
}
