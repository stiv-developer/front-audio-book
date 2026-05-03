import { Injectable, signal } from '@angular/core';

export interface IndiceItem {
  texto: string;
  nivel: number;
  pagina: number;
}

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  
  indice = signal<IndiceItem[]>([]);

  paginaActual = signal<number>(0);

  actualizarIndice(nuevoIndice: IndiceItem[]) {
    this.indice.set(nuevoIndice);
  }

  irPagina(num: number) {
    const indiceReal = num - 1;

    this.paginaActual.set(indiceReal);
    
    const elemento = document.getElementById(`hoja-${indiceReal}`);
    if (elemento) {
      elemento?.scrollIntoView({ behavior: 'smooth', block: 'start'})
    } else {
      console.warn(`No se encontro el elemento: hoja-${indiceReal}`);
    }
  }
}
