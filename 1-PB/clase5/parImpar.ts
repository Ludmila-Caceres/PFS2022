import*as rls from 'readline-sync'

let numIngresado=rls.questionInt("Ingrese un número: ")!;
while (numIngresado<=0){
    let numIngresado=rls.questionInt("Ingrese otro número (positivo): ");
} if (numIngresado%2==0){
    console.log("El numero es par")
}else{
    console.log("el numero es impar")
}