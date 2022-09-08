import * as fs from 'fs';
import ManejoTextos from '../ejercicioI/manejoTextos';
import Calzado from './calzado';

export default class Zapateria {
    private nombre:string;
    private calzados:Calzado[];

    public constructor(nombre:string) {
        this.nombre=nombre;
        this.calzados=[];
    }
    
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(nombre:string):void{
        this.nombre=nombre;
    }

    public createCalzados(calzado:Calzado):void {
        if(calzado){
        this.calzados.push(calzado);  
        }  
    }

    public findCalzados(calzado:Calzado):number {
        for (let i = 0; i < this.calzados.length; i++) { 
            if (this.calzados[i] == calzado){  return i; }   
        }
        return -1;
    }

    public updCalzados(calzado:Calzado, posicion:number):void{
        if(calzado){
            this.calzados[posicion]=calzado;
        }
    }

    public delCalzados(posicion:number):void{
        if(this.calzados[posicion]){
            this.calzados.splice(posicion,1)
        }
    }

    public readCalzadosTxt():string{
        let textoCalzados:string= '';
        this.calzados.forEach(calzado=>{
            textoCalzados+=calzado.imprimir()+'\n'
        });
        return textoCalzados
    };
    
    /*public mostrarc
    alzados( posicion?: number): void {
        console.log('Compra de calzado');
        if (this.calzados.length > 0) {
            if (posicion===undefined) {
                for (let i = 0; i < this.calzados.length; i++) {
                    console.log(this.calzados[i].mostrar());            
                };
            } else {
                console.log(this.calzados[posicion].mostrar());            
            }
        } else {
            console.log('--VACIO--');
        }   
    }
    public guardarcalzados() : void {
        let datoscalzados: ManejoTextos = new ManejoTextos('calzados.txt','\n',';');
        datoscalzados.limpiarDatos();
        this.calzados.forEach(calzado => {
            datoscalzados.setFila(calzado.guardar().toString());
        });
        datoscalzados.grabarArchivo();
    }*/
}