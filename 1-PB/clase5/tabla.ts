//algoritmo suma entre numeros con for
import*as rls from 'readline-sync'

let numIngresado:number=rls.questionInt("Qué tabla desea? ")!;
let hasta:number=rls.questionInt("Hasta qué número desea? ")!;
let resultado:number=0;
for (let contador:number=1;contador<=hasta;contador++){
    resultado=numIngresado*contador;
    console.log(numIngresado,"x",contador,"=",resultado);
}