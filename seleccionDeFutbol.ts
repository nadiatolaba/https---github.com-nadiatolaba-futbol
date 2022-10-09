import { Masajista } from "./masajista";
import { Futbolista } from "./futbolista";
import { Entrenador } from "./entrenador";

export class SeleccionDeFutbol {  //la clase seleccionDeFutbol compone a las clases anteriores
    private nombreSeleccion: string;
    private masajitas: Masajista[];
    private futbolistas: Futbolista[];
    private entrenadores: Entrenador[];

    constructor(nombreSeleccion: string, masajitas: Masajista[], futbolistas: Futbolista[], entrenadores: Entrenador[]) {
        this.nombreSeleccion = nombreSeleccion;
        this.masajitas = masajitas;
        this.futbolistas = futbolistas;
        this.entrenadores = entrenadores;
    }

    public getNombreSeleccion(): string {
        return this.nombreSeleccion;
    }

    public setNombreSeleccion(nombreSeleccion: string): void {
        this.nombreSeleccion = nombreSeleccion;
    }
}