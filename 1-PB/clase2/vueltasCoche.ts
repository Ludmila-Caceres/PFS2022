import * as readlineSync from 'readline-sync';      

let vuelta1:number=readlineSync.questionInt("Ingrese el tiempo de la vuelta 1: ")!;
let vuelta2:number=readlineSync.questionInt("Ingrese el tiempo de la vuelta 2: ")!;
let vuelta3:number=readlineSync.questionInt("Ingrese el tiempo de la vuelta 3: ")!;
let vuelta4:number=readlineSync.questionInt("Ingrese el tiempo de la vuelta 4: ")!;

let tiempoTotal:number=vuelta1+vuelta2+vuelta3+vuelta4;

console.log("Tiempo total: ", tiempoTotal);
console.log("Promedio de vuelta: ", tiempoTotal/4);