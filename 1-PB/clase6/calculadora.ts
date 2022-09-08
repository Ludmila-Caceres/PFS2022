import*as rls from 'readline-sync'

//calculadora
let i:number,linea:string;
let numero1:number=rls.questionInt('Ingrese un número: ')!;
let numero2:number=rls.questionInt('Ingrese un número: ')!;
let opcionMenu:number=rls.questionInt('Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ')!;

//opcion método (modularización)
linea="";
for(i=0;i<=40;i++){
    linea=linea+"-";
};

if (opcionMenu==1){
    console.log(linea);
    console.log('El resultado es: ', numero1+numero2);
    console.log(linea);
} else if(opcionMenu==2){
    console.log(linea);
    console.log('el resultado es: ',numero1-numero2);
    console.log(linea);
}