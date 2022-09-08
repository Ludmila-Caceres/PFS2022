"use strict";
var btnSacar, btnPoner, btnVaciar, contenedor;
btnSacar = document.getElementById("btnSacar");
btnPoner = document.getElementById("btnPoner");
btnVaciar = document.getElementById("btnVaciar");
contenedor = document.getElementById("contenedor");
var cuenta = 0;
btnSacar.addEventListener("click", function () {
    if (cuenta > 0) {
        cuenta--;
        var parrafo = contenedor.lastElementChild;
        contenedor.removeChild(parrafo);
    }
    else {
        alert("No hay más elementos");
    }
});
btnPoner.addEventListener("click", function () {
    cuenta++;
    var parrafo = document.createElement('div');
    parrafo.innerHTML = "".concat(cuenta);
    parrafo.classList.add(((cuenta % 2) == 0) ? "par" : "impar");
    contenedor.appendChild(parrafo);
});
btnVaciar.addEventListener("click", function () {
    if (cuenta > 0) {
        while (contenedor.hasChildNodes())
            ;
        contenedor.removeChild(contenedor.firstElementChild);
        cuenta = 0;
    }
    else {
        alert("No hay mas elementos");
    }
});
