import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  
  obtenerIndice(paginas: string[]) {
    const indiceCompleto: { texto: string, nivel: number, pagina: number }[] = [];

    // Recorremos cada página por su índice (numPag)
    paginas.forEach((contenidoPagina, numPag) => {
      const lineas = contenidoPagina.split('\n');
      
      lineas.forEach(linea => {
        const trimmed = linea.trim();
        if (trimmed.startsWith('#')) {
          const nivel = (trimmed.match(/#/g) || []).length;
          const texto = trimmed.replace(/#/g, '').trim();
          
          indiceCompleto.push({
            texto,
            nivel,
            pagina: numPag // Aquí guardamos el número de página real
          });
        }
      });
    });

    return indiceCompleto;
  }
}
