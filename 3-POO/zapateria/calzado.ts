export default class Calzado {
    //Estados
    protected tipo: string;
    protected material: string;
    protected talle: number;
    protected precio: number;

    constructor(tipo: string, material: string, talle: number, precio: number) {
        this.tipo=tipo;
        this.material=material;
        this.talle=talle;
        this.precio=precio; 
    }

    //Funcionalidades
    public getTipo(): string { 
        return this.tipo; 
    }
    public setTipo(tipo: string): void { 
        this.tipo = tipo; 
    }
    public getMaterial(): string {
        return this.material;
    }
    public setMaterial(material: string): void {
        this.material = material;
    }

    public getTalle(): number { 
        return this.talle; 
    }
    public setTalle(talle: number): void {
        this.talle = talle;
    }
    public getPrecio(): number {
        return this.precio;
    }
    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public imprimir(){
        console.log(`Calzado { Tipo:${this.getTipo()}, Material:${this.getMaterial()}, Talle:${this.getTalle()}, Precio:${this.getPrecio()} }`)
    }   
 //   mostrar(): string;
 //   guardar(): string[];
}