import*as rls from 'readline-sync'

let cantidad:number=rls.questionInt('ingrese la cantidad de nros:')!;
let v:number[]=new Array(cantidad);
let indice:number;
for(indice=0;indice<cantidad;indice++){
    v[indice]=rls.questionInt('ingrese v[${indice}]:')!;
}
let numNeg:number=0;
let numCero:number=0;
let numPos:number=0;
for(indice=0;indice<cantidad;indice++){
    if(v[indice]==0){
        numCero++;
    }else if(v[indice]>0){
        numPos++;
    }else{
        numNeg++;
    }
}
console.log(`Hay ${numPos} positivos, ${numNeg} negativos, ${numCero} ceros.`);