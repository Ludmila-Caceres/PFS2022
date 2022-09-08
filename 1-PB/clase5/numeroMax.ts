import*as rls from 'readline-sync';

let conIngresos:boolean=false;
let num=rls.questionInt("Ingrese un número: ");
let maxNum:number=num!;
while(num!=0){
    conIngresos=true;
    if(num>maxNum)!{
        maxNum=num;
    }
    let num=rls.questionInt("Ingrese un número:");
}
if (conIngresos){
    console.log("El máximo es: ",maxNum)
}