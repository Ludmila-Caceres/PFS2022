import*as rls from 'readline-sync'

let numero1:number=rls.questionInt('Indique el número a verificar: ')!;
let numero2:number=rls.questionInt('Indique el número múltiplo: ')!;
if (esMultiplo(numero1,numero2)){
    console.log(numero1,"ES número múltiplo de ",numero2);
}else{
    console.log(numero1,"NO es número múltiplo de ",numero2);
}
function esMultiplo(numero1:number,numero2:number):boolean{
    return((numero1%numero2)==0)
}