import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {

  obtenerIndice(paginas: string[]) {
    const indiceCompleto: { texto: string; nivel: number; pagina: number }[] = [];

    paginas.forEach((contenidoPagina) => {
      // 1. Encontrar el bloque :::indice dentro de la página
      const matchIndice = contenidoPagina.match(/:::indice([\s\S]*?):::/);
      
      if (matchIndice) {
        const lineas = matchIndice[1].split('\n');

        lineas.forEach(linea => {
          if (linea.trim().startsWith('*')) {
            // 2. Determinar nivel por la cantidad de espacios antes del asterisco
            const espaciosIniciales = linea.search(/\*/);
            const nivel = Math.floor(espaciosIniciales / 2) + 1;

            // 3. Extraer el número de página (lo que está entre **)
            const matchPagina = linea.match(/\*\*(\d+)\*\*/);
            const numPaginaReal = matchPagina ? parseInt(matchPagina[1], 10) : 0;

            // 4. Limpiar el texto (quitar asterisco y el número de página)
            const texto = linea.replace(/\*/, '')
                               .replace(/\*\*\d+\*\*/, '')
                               .trim();

            if (texto) {
              indiceCompleto.push({
                texto,
                nivel,
                pagina: numPaginaReal // Ahora usamos el número del libro
              });
            }
          }
        });
      }
    });

    return indiceCompleto;
  }
}
