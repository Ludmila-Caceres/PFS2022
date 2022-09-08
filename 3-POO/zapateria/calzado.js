"use strict";
exports.__esModule = true;
var Calzado = /** @class */ (function () {
    function Calzado(tipo, material, talle, precio) {
        this.tipo = tipo;
        this.material = material;
        this.talle = talle;
        this.precio = precio;
    }
    //Funcionalidades
    Calzado.prototype.getTipo = function () {
        return this.tipo;
    };
    Calzado.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Calzado.prototype.getMaterial = function () {
        return this.material;
    };
    Calzado.prototype.setMaterial = function (material) {
        this.material = material;
    };
    Calzado.prototype.getTalle = function () {
        return this.talle;
    };
    Calzado.prototype.setTalle = function (talle) {
        this.talle = talle;
    };
    Calzado.prototype.getPrecio = function () {
        return this.precio;
    };
    Calzado.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Calzado.prototype.imprimir = function () {
        console.log("Calzado { Tipo:".concat(this.getTipo(), ", Material:").concat(this.getMaterial(), ", Talle:").concat(this.getTalle(), ", Precio:").concat(this.getPrecio(), " }"));
    };
    return Calzado;
}());
