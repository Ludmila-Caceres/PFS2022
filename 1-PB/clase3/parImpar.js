"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var num = rls.questionInt("ingrese un número: ");
if (num == 0) {
    console.log("el" + num + "no es par ni impar");
}
else if (num % 2 == 0) {
    console.log("el" + num + "es par");
}
else {
    console.log("el" + num + "es impar");
}
