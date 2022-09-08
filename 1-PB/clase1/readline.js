"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
readlineSync.question(["texto"]); //lee un texto
readlineSync.questionInt([3998]); //lee un numero entero (integer)
readlineSync.questionFloat([0.25]); //lee un numero decimal (float)
//otro ejemplo
var primerNumero = readlineSync.questionInt("Ingrese el primer número: ");
console.log("el primer número es ", primerNumero);
var segundoNumero = readlineSync.questionInt("Ingrese el segundo número: ");
console.log("el segundo número es ", segundoNumero);
var resultado = primerNumero + segundoNumero;
console.log("el resultado de la suma es:", resultado);
//otro ejemplo
var base = readlineSync.questionInt("ingrese la base:");
var altura = readlineSync.questionInt("ingrese la altura:");
var area = base * altura;
console.log("el area es:", area);
