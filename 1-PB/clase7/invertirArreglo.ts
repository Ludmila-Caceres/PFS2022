import*as rls from 'readline-sync'

//definir variables
let cantidad:number=rls.questionInt('ingrese la cantidad de números:')!;
let v:number[] = new Array(cantidad);//el tamaño del arreglo(cant)depende del usuario
let indice:number;

//cargar arreglo
for(indice=0;indice<cantidad;indice++){ //"cantidad"como limit porque el tamaño es desconocido
    v[indice]=rls.questionInt(`ingrese v[${indice}]: `)!;
}
let cadena:string="";
//desde el ult elemento  //m detengo en el 1ro   //resto de a 1
for(indice=cantidad-1;   indice>=0;             indice--){
    cadena=cadena+v[indice]+"";
}
console.log(cadena);