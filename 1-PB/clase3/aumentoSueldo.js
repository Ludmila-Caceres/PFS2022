"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var sueldoActual = rls.questionInt("Ingrese el salario actual del empleado: ");
var nuevoSueldo = 0;
if (sueldoActual <= 15000) {
    nuevoSueldo = sueldoActual * 1.2;
    console.log("ud. tiene un aumento del 20%, su nuevo sueldo es: ", nuevoSueldo);
}
else if (sueldoActual <= 20000) {
    nuevoSueldo = sueldoActual * 1.1;
    console.log("ud. tiene un aumento del 10%, su nuevo sueldo es: ", nuevoSueldo);
}
else if (sueldoActual <= 25000) {
    nuevoSueldo = sueldoActual * 1.05;
    console.log("ud. tiene un aumento del 5, su nuevo sueldo es: ", nuevoSueldo);
}
else {
    nuevoSueldo = sueldoActual;
    console.log("ud. no tiene aumento");
}
