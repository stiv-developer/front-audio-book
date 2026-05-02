import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { LibroService } from '../../service/libro.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

  @Input() isSidebarOpen: boolean = false;
  @Output() toggleSidebarEvent = new EventEmitter<void>();

  public libroService = inject(LibroService);

  toggleSidebar() {
    this.toggleSidebarEvent.emit()
  }

  navegar(numPagina: number) {
    this.libroService.irPagina(numPagina);

    if(window.innerWidth < 1024) {
      this.toggleSidebarEvent.emit();
    }
  }
}
