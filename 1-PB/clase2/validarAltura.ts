import * as rls from 'readline-sync'

let alturaPermitida:number=1.3;
let alturaPersona:number=rls.questionFloat("indique altura: ")!;
if (alturaPersona<=alturaPermitida){
    console.log("No puede subir al juego")
} else {
    console.log("puede subir al juego")
}