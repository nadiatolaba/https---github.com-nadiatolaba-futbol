import { Persona } from "./persona";

export class Masajista extends Persona {
    protected activo: boolean;

    constructor(nombre: string, apellido: string, activo: boolean) {
        super(nombre, apellido);
        this.activo = activo;
    }

    public realizarMasaje(masajes: boolean): void {
        if (masajes == true) {
            console.log("El masajista " + this.nombre, "" + this.apellido, "debe realizar masaje");
        } else {
            console.log("El masajista " + this.nombre, "" + this.apellido, "no debe realizar masajes");
        }
    }
}
// Prueba de funcionamiento
/*
let masajista1 : Masajista = new Masajista ("Juan", "Benitez",false); 
let masajista2 : Masajista = new Masajista ("José", "Juarez",false); 
console.log(masajista1);
masajista1.realizarMasaje(true);
masajista2.realizarMasaje(false);
*/