import*as rls from 'readline-sync'

let usuario:string="Juan";
let clave:string="claveJuan";
let userIngresado:string=rls.question("Por favor ingrese el usuario: ");
let claveIngresada:string=rls.question("Por favor ingrese clave: ",
            {hideEchoBack:true});
if (usuario==userIngresado&&clave==claveIngresada){
    console.log("bienvenido");
} else{
    console.log("usuario o clave incorrectos");
}