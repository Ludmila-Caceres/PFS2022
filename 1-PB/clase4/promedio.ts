import*as rls from 'readline-sync'

let nota,suma,promedio,contador:number;
suma=0;
for (contador=1;contador<11;contador++){
    nota=rls.questionInt("ingrese la nota "+contador+": ");
    suma+=nota; 
}
promedio=suma/10;
console.log("elpromedio de la nota es: "+promedio);