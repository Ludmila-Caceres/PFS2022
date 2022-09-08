"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var alturaPermitida = 1.3;
var alturaPersona = rls.questionFloat("indique altura: ");
if (alturaPersona <= alturaPermitida) {
    console.log("No puede subir al juego");
}
else {
    console.log("puede subir al juego");
}
