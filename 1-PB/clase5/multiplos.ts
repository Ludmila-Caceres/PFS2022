//algoritmo multiplos de 2 o 3 del 1 al 100

let indice:number;
let cadena:string="";

for (indice=1;indice<=100;indice++){
    if(indice%2==0 || indice%3==0){
        cadena=cadena+indice+"";
    }
}
console.log(cadena);