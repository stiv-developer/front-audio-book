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
    this.paginaActual.set(num);

    const elemento = document.getElementById(`hoja-${num}`);
    elemento?.scrollIntoView({ behavior: 'smooth', block: 'start'})
  }
}
