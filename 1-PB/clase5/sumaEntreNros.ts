//suma entre números con while 
import*as rls from 'readline-sync'
let primerNum:number=rls.questionInt('Ingrese el primer número: ')!;
let segundoNum:number=rls.questionInt('Ingrese el segundo número: ')!;
let actual,suma:number;
actual=primerNum;
suma=0;
while(actual<=segundoNum){
    suma=suma+actual;
    actual++;
} console.log("el resultado de la suma es: ",suma)