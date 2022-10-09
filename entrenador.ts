import { Persona } from "./persona";

export class Entrenador extends Persona {
    protected titular: boolean;

    constructor(nombreEntrenador: string, apellidoEntrenador: string, titular: boolean) {
        super(nombreEntrenador, apellidoEntrenador);
        this.titular = titular;

    }
    public getTitularidad(): boolean {
        return this.titular;
    }
    public setTitularidad(titular: boolean): void {
        this.titular = titular;
    }
}
// Prueba de código
/*
let entrenador1: Entrenador = new Entrenador ("Sergio", "Alvarez","argentino");
let entregador2: Entrenador = new Entrenador ("Mateo", "Gonzalez", "sueco");
console.log ("El entrenador "+entrenador1.getNombre(),""+entrenador1.getApellido(),"es",entrenador1.getNacionalidad());
*/