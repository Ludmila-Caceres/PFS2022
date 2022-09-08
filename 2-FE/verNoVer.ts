"use strict";

let btnSacar, btnPoner, btnVaciar, contenedor
btnSacar=document.getElementById("btnSacar");
btnPoner=document.getElementById("btnPoner");
btnVaciar=document.getElementById("btnVaciar");
contenedor=document.getElementById("contenedor");
let cuenta=0;
btnSacar.addEventListener("click",() => {
    if(cuenta>0){
        cuenta--;
        let parrafo=contenedor.lastElementChild;
        contenedor.removeChild(parrafo);
    } else{
        alert("No hay más elementos");
    }
});
btnPoner.addEventListener("click",()=>{
    cuenta++;
    let parrafo=document.createElement('div');
    parrafo.innerHTML=`${cuenta}`;
    parrafo.classList.add(((cuenta%2)==0)?"par":"impar");
    contenedor.appendChild(parrafo);
})
btnVaciar.addEventListener("click",()=>{
    if(cuenta>0){
        while(contenedor.hasChildNodes());
            contenedor.removeChild(contenedor.firstElementChild);
        cuenta=0;
    }else{
        alert("No hay mas elementos");
    }
});