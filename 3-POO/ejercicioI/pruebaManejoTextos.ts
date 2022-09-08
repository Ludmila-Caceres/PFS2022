import ManejoTextos from './manejoTextos';
import Padre from './Padre';
import Hijo from './Hijo';

let info: Padre[]=[];
let fila: string[]=[];
let getCantidadFilas: number= 0;
let MTP: ManejoTextos= new ManejoTextos('datosPadre.txt', ';', ',');
let MTH: ManejoTextos= new ManejoTextos('datosHijo.txt', '\r\n', '|');

MTP.leerArchivo();
MTH.leerArchivo();
MTP.getCantidadFilas();
getCantidadFilas= MTP.getCantidadFilas();
for (let i=0; i<getCantidadFilas; i++){
    fila= MTH.getFila(i);
    info.push(new Hijo((fila[0]=='true'?true:false),parseInt(fila[1]),parseInt(fila[2]),fila[3],parseInt(fila[4])));
}
