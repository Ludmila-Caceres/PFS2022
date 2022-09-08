import*as rls from 'readline-sync';

let min,max,sum,avg,count:number;
let num=rls.questionInt("Ingrese un número (0 para cortar): ")
let count=0;
let sum=0;
let avg=0;

let min=num;
let max=num;

while(num!=0){
    if(num<min){
        min=num;
    }else if(num>max){
        max=num;
    }
}
sum+=num;
count++;

num=rls.questionInt('ingrese un número (0 para cortar');

if(count>0){
    avg=sum/count;
    console.log('el mínimo es: ',min);
    console.log('el máximo es: ',max);
    console.log('el promedio es: ',avg);
}else{
    console.log('no ingresó ningún número!');
}