//Algoritmo cantidad distribucion positivos
import*as rls from 'readline-sync';

let cantTotal:number=0;
let cantPositivos:number=0;
let porcPositivos:number=0;
let num=rls.questionInt("ingrese un número: ");
while(num!=0){
    if(num>0){
        cantPositivos++;
    }
    cantTotal++;
    num=rls.questionInt("ingrese un número: ");
}
if (cantTotal>0){
    porcPositivos=cantPositivos*100/cantTotal;
    console.log(cantPositivos,"positivos",porcPositivos,"% del total.");
}