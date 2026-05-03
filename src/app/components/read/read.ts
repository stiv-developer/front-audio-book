import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LucideDynamicIcon, LucideList, LucidePause, LucidePlay, LucideRotateCw, LucideSkipBack, LucideSkipForward } from '@lucide/angular';
import { MarkdownModule } from 'ngx-markdown';
import { NavbarService } from '../../service/navbar';
import { LibroService } from '../../service/libro.service';

@Component({
  selector: 'app-read',
  imports: [MarkdownModule, CommonModule, FormsModule, LucideDynamicIcon],
  templateUrl: './read.html',
  styleUrl: './read.scss',
})
export class Read {
  private _http = inject(HttpClient);
  private _navbarService = inject(NavbarService);
  private _libroService = inject(LibroService);
  
  pages = signal<string[]>([]);
  currentIdx = signal<number>(0);
  playbackRate = 1;
  isReading = signal<boolean>(false);
  modoContinuo = signal<boolean>(false);
  indice = signal<{texto: string, nivel:number, pagina: number}[]>([])

  private synth = window.speechSynthesis;

  readonly IconPlay = LucidePlay;
  readonly IconPause = LucidePause;
  readonly IconNext = LucideSkipForward;
  readonly IconPrev = LucideSkipBack;
  readonly IconRotate = LucideRotateCw;
  readonly IconList = LucideList;

  constructor() {
    
    this._http.get('el-arte-de-gestionar-conflictos-en-la-vida-y-la-empresa.md', { responseType: 'text' }).subscribe(data => {
      
      const miSeparator = '##pag';
      
      const splitContent = data.split(miSeparator);
      
      this.pages.set(splitContent);
      const nuevoIndice = this._navbarService.obtenerIndice(splitContent);
      // this.indice.set(nuevoIndice)

      this._libroService.actualizarIndice(nuevoIndice);

      const cleanPages = splitContent
      .map(p => { 
        let page = p.trim();
        
        // 1. Primero: El elemento más pequeño(inline)
        page = page.replace(/:::tag\s*([\s\S]*?)\s*:::/g, '<span class="custom-tag">$1</span>');

        // Indice
        page = page.replace(/:::indice([\s\S]*?):::/g, '<div class="custom-toc">\n\n$1\n\n</div>');

        page = page.replace(/:::dotted-box([\s\S]*?):::/g, (match, contenido) => {
          return `<div class="dotted-box">\n\n${contenido}\n\n</div>`
        });

        page = page.replace(/:::solid-box([\s\S]*?):::/g, (match, contenido) => {
          return `<div class="solid-box">\n\n${contenido}\n\n</div>`
        })

        // Centrado
        page = page.replace(/:::center([\s\S]*?):::/g, (match, contenido) => {
          return `<div class="text-center w-full block mb-4">\n\n${contenido}\n\n</div>`
        });

        // Derecha
        page = page.replace(/:::right([\s\S]*?):::/g, '<div class="text-right w-full">$1</div>');

        // Cursiva
        page = page.replace(/:::italic([\s\S]*?):::/g, '<div class="italic-block">$1</div>'); 

        return page.replace(/^:\d+\s*/, '');
      })
      .filter(p => p.length > 0);
    
      this.pages.set(cleanPages);
    });
  }

  leerHoja(textoOriginal: string) {
    this.synth.cancel();

    // 1. Limpieza profunda para la VOZ (lo que el navegador va a decir)
    let textoParaVoz = textoOriginal
      .replace(/<[^>]*>/g, '')
      .replace(/:::[\s\S]*?:::/g, '')
      .replace(/!\[.*?\]\(.*?\)/g, '')
      .replace(/#+/g, '')
      .replace(/\*\*|\*/g, '')
      .replace(/\n+/g, ' ')
      .replace(/\s\s+/g, ' ')
      .trim();

    // 2. Creamos la emisión de voz
    const utterance = new SpeechSynthesisUtterance(textoParaVoz);
    utterance.lang = 'es-ES';
    utterance.rate = this.playbackRate;

    utterance.onstart = () => {
      this.isReading.set(true);
    };

    // Finaliza la lectura del texto
    utterance.onend = () => {

      if (this.modoContinuo() && this.currentIdx() < this.pages().length - 1) {
        setTimeout(() => {
          this.cambiarPagina(1);
          this.leerHoja(this.pages()[this.currentIdx()]);
        }, 1000);
      } else {
        this.isReading.set(false);
        this.modoContinuo.set(false);
      }

    };

    utterance.onerror = () => {
      this.isReading.set(false);
    }

    this.synth.speak(utterance);
  }

  detenerLectura() {
    this.synth.cancel();
    this.isReading.set(false);
    this.modoContinuo.set(false);
  }

  prepararTextoParaLectura(texto: string): string {
    return texto.split(' ').map((palabra, i) => 
      `<span id="word-${i}" class="palabra-lectura">${palabra}</span>`
    ).join(' ');
  }

  cambiarPagina(delta: number) {
    const nuevoIdx = this.currentIdx() + delta;

    if (nuevoIdx >= 0 && nuevoIdx < this.pages().length) {
      this.currentIdx.set(nuevoIdx);

      const id = `hoja-${nuevoIdx}`;
      const elemento = document.getElementById(id);

      if(elemento) {
        elemento.scrollIntoView({ behavior: 'smooth', block: 'start'});
      }
    } else {
      this.detenerLectura();
    }
  }

  toggleLecturaHoja(index: number) {
    console.log("toggleLecturaHoja")
    if (this.isReading() && this.currentIdx() === index) {
      this.detenerLectura();
    } else {
      this.modoContinuo.set(false);
      this.currentIdx.set(index)
      this.leerHoja(this.pages()[index]);
    }
  }

  reproducirGlobal() {
    if (this.isReading()) {
      this.detenerLectura();
    } else {
      this.modoContinuo.set(true);
      this.leerHoja(this.pages()[this.currentIdx()]);
    }
  }

  irAPaginaPorTitulo(numPagina: number) {
    console.log("numPagina: ", numPagina)
    const indiceArray = numPagina - 1;

    this.currentIdx.set(indiceArray);

    const id = `hoja-${numPagina}`;
    const elemento = document.getElementById(id);
  
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
