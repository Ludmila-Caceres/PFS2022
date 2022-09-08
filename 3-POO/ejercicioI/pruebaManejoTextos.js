"use strict";
exports.__esModule = true;
var manejoTextos_1 = require("../zapateria/manejoTextos");
var Hijo_1 = require("./Hijo");
var info = [];
var fila = [];
var getCantidadFilas = 0;
var MTP = new manejoTextos_1["default"]('datosPadre.txt', ';', ',');
var MTH = new manejoTextos_1["default"]('datosHijo.txt', '\r\n', '|');
MTP.leerArchivo();
MTH.leerArchivo();
MTP.getCantidadFilas();
getCantidadFilas = MTP.getCantidadFilas();
for (var i = 0; i < getCantidadFilas; i++) {
    fila = MTH.getFila(i);
    info.push(new Hijo_1["default"]((fila[0] == 'true' ? true : false), parseInt(fila[1]), parseInt(fila[2]), fila[3], parseInt(fila[4])));
}
