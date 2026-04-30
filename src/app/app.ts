import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MarkdownModule } from "ngx-markdown";

@Component({
  selector: 'app-root',
  imports: [MarkdownModule, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  private http = inject(HttpClient);
  
  pages = signal<string[]>([]);
  currentIdx = 0;
  playbackRate = 1;
  isReading = false;
  modoContinuo = false;
  private synth = window.speechSynthesis;

  constructor() {
    this.http.get('ERP.md', { responseType: 'text' }).subscribe(data => {

    const miSeparator = '##pag'
      
    const splitContent = data.split(miSeparator);

    const cleanPages = splitContent
    .map(p => { 
      let page = p.trim();
      
      // 1. Primero: El elemento más pequeño(inline)
      page = page.replace(/:::tag\s*([\s\S]*?)\s*:::/g, '<span class="custom-tag">$1</span>');

      // Indice
      page = page.replace(/:::indice([\s\S]*?):::/g, '<div class="custom-toc">\n\n$1\n\n</div>');

      page = page.replace(/:::dotted-box([\s\S]*?):::/g, (match, contenido) => {
        return `<div class="dotted-box">\n\n${contenido}\n\n</div>`
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
      this.isReading = true;
    };

    // Finaliza la lectura del texto
    utterance.onend = () => {

      if (this.modoContinuo && this.currentIdx < this.pages().length - 1) {
        setTimeout(() => {
          this.cambiarPagina(1);
          this.leerHoja(this.pages()[this.currentIdx]);
        }, 1000);
      } else {
        this.isReading = false;
        this.modoContinuo = false;
      }

    };

    utterance.onerror = () => {
      this.isReading = false;
    }

    this.synth.speak(utterance);
  }

  detenerLectura() {
    this.synth.cancel();
    this.isReading = false;
    this.modoContinuo = false;
  }

  prepararTextoParaLectura(texto: string): string {
    return texto.split(' ').map((palabra, i) => 
      `<span id="word-${i}" class="palabra-lectura">${palabra}</span>`
    ).join(' ');
  }

  toggleDarkMode() {
    const html = document.documentElement;
    if(html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light')
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  cambiarPagina(delta: number) {
    
    const nuevoIdx = this.currentIdx + delta;

    if (nuevoIdx >= 0 && nuevoIdx < this.pages().length) {
      this.currentIdx = nuevoIdx;

      const id = `hoja-${this.currentIdx}`;
      const elemento = document.getElementById(id);

      if(elemento) {
        elemento.scrollIntoView({ behavior: 'smooth', block: 'start'});
      }
    } else {
      this.detenerLectura();
      
    }
  }

  toggleLecturaHoja(index: number) {
    if (this.isReading && this.currentIdx === index) {
      this.detenerLectura();
    } else {
      this.modoContinuo = false;
      this.currentIdx = index;
      this.leerHoja(this.pages()[index]);
    }
  }

  reproducirGlobal() {
    if (this.isReading) {
      this.detenerLectura();
    } else {
      this.modoContinuo = true;
      this.leerHoja(this.pages()[this.currentIdx]);
    }
  }
}
