import*as rls from 'readline-sync'

//calculadora
let i:number,linea:string;
let numero1:number=rls.questionInt('Ingrese un número: ')!;
let numero2:number=rls.questionInt('Ingrese un número: ')!;
let opcionMenu:number=rls.questionInt('Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ')!;

//modularizacion
function dibujarGuiones(n:number){
    let i:number;
    let linea:string="";
    for (i=1;i<=n;i++){ //;i<=cantidad acá y listo;
        linea+="-";
    };
    console.log(linea);
}
if (opcionMenu == 1) {
    dibujarGuiones(20);
    console.log('El resultado es: ', numero1 + numero2);
    dibujarGuiones(20);
}
else if (opcionMenu == 2) {
    dibujarGuiones(30);
    console.log('el resultado es: ', numero1 - numero2);
    dibujarGuiones(30);
}
