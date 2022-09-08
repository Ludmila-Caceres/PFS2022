import * as readlineSync from 'readline-sync';

readlineSync.question(["texto"]); //lee un texto
readlineSync.questionInt([3998]); //lee un numero entero (integer)
readlineSync.questionFloat([0.25]); //lee un numero decimal (float)

//otro ejemplo
let primerNumero:number=readlineSync.questionInt( "Ingrese el primer número: ")!;
console.log("el primer número es ", primerNumero);
let segundoNumero:number=readlineSync.questionInt( "Ingrese el segundo número: ")!;
console.log("el segundo número es ", segundoNumero);
let resultado:number=primerNumero+segundoNumero;
console.log("el resultado de la suma es:", resultado);

//otro ejemplo
let base:number=readlineSync.questionInt("ingrese la base:",)!;
let altura:number=readlineSync.questionInt("ingrese la altura:")!;
let area:number=base*altura;
console.log("el area es:", area);