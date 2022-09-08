import*as rls from 'readline-sync'

let base:number=rls.questionInt('ingrese base: ')!;
let exponente:number=rls.questionInt('Ingrese exponente: ')!;
console.log('la potencia es= ', calcularPotencia(base,exponente));

function calcularPotencia(base:number,exponente:number):number{
    let numero:number=1;
    if(exponente==0){
        return 1;
    } else{
        for(let i=1;i<=exponente;i++){
            numero=numero*base;
        };
        return numero;
    }
}