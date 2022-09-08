import*as rls from 'readline-sync'
let llegadaColectivo:string;
console.log("esperando el colectivo");
llegadaColectivo=rls.question("llegó el colectivo? (S/N): ")
while (llegadaColectivo=="N"){
    console.log("esperando el colectivo")
}
console.log("Llegó el colectivo")