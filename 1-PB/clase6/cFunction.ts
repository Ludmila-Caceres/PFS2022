import*as rls from 'readline-sync'

function dibujar(numero:number,simbolo:number){
    let linea:string=simbolo.toString();
    for(i=0;i<=numero;i++){
        linea=linea+simbolo;
    }
    console.log(linea);
}
let i:number,linea:string;
let numero1:number=rls.questionInt('ingrese un número: ')!;
let numero2:number=rls.questionInt('ingrese un número: ')!;
let opcionMenu:number=rls.questionInt('ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ')!;

if(opcionMenu==1){
    dibujar(40,6);
    console.log('el resultado es: ',numero1+numero2);
    dibujar(40,7)
}else{
    dibujar(30,1);
    console.log('el resultado es: ',numero1-numero2);
    dibujar(30,3)
}