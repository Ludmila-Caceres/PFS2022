import*as rls from 'readline-sync'

let numero1:number=rls.questionInt("primer nro: ")!;
let numero2:number=rls.questionInt("segundo nro: ")!;
let numero3:number=rls.questionInt("tercer nro: ")!;
if(numero1>numero2&&numero1>numero3){
    console.log("el numero"+numero1+" es el mayor");
} else if (numero2>numero1&&numero2>numero3){
    console.log("el numero"+numero2+"es el mayor");
} else if(numero3>numero1&&numero3>numero2){
    console.log("el numero"+numero3+"es el mayor");
}