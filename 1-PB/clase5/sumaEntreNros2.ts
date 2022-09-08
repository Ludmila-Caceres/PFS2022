//suma entre números invertidos 
import*as rls from 'readline-sync'
let primerNum:number=rls.questionInt('Ingrese el primer número: ')!;
let segundoNum:number=rls.questionInt('Ingrese el segundo número: ')!;
let actual,suma,aux:number;
actual=primerNum;
if(primerNum>segundoNum){
    aux=primerNum;
    primerNum=segundoNum;
    segundoNum=aux;
}
suma=0;
for(actual=primerNum;actual<=segundoNum;actual++){
    suma=suma+actual;
} console.log("el resultado de la suma es: ",suma)