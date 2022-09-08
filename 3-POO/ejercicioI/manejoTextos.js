"use strict";
exports.__esModule = true;
var fs = require("fs");
var ManejoTextos = /** @class */ (function () {
    function ManejoTextos(archivo, separaFil, separaCol) {
        this.datos = [];
        this.nombreArchivo = archivo;
        this.separadorFilas = separaFil;
        this.separadorColumnas = separaCol;
    }
    ManejoTextos.prototype.leerArchivo = function () {
        var _this = this;
        var fila;
        var texto = fs.readFileSync(this.nombreArchivo, 'utf8');
        //palabras separadas en un arreglo usando el espacio como delimitador
        if (texto) {
            var filas = texto.split(this.separadorFilas);
            var fila_1;
            for (var i = 0; i < filas.length; i++) {
                fila_1 = filas[i];
                this.datos.push(fila_1.split(this.separadorColumnas));
            }
            filas.forEach(function (fila) {
                _this.datos.push(fila.split(_this.separadorColumnas));
            });
        }
    };
    ManejoTextos.prototype.grabarArchivo = function () {
    };
    ManejoTextos.prototype.getCantidadFilas = function () {
        return this.datos.length;
    };
    ManejoTextos.prototype.getFila = function (posicion) {
        return this.datos[posicion];
    };
    ManejoTextos.prototype.limpiarDatos = function () { };
    ManejoTextos.prototype.setFila = function (separaFil) {
        this.separadorFilas = separaFil;
    };
    return ManejoTextos;
}());
exports["default"] = ManejoTextos;
