"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var llegadaColectivo;
console.log("esperando el colectivo");
llegadaColectivo = rls.question("llegó el colectivo? (S/N): ");
while (llegadaColectivo == "N") {
    console.log("esperando el colectivo");
}
console.log("Llegó el colectivo");
