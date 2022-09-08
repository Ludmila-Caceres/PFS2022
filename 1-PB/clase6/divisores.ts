import*as rls from 'readline-sync'

let numero:number=rls.questionInt('Indique un número: ')!;
let cantDivisores:number=contarDivisores(numero);
console.log("el número ",numero,"tiene ",cantDivisores,'divisores.');

function contarDivisores(numero:number):number{
    let cantidad:number=0;
    let divisor:number;
    for (divisor=1;divisor<=numero;divisor++){
        if(esMultiplo(numero,divisor)){
            cantidad++;
        }
    }
    return cantidad;
}
function esMultiplo(numero1:number,numero2:number):boolean{
    return((numero1%numero2)==0)
}