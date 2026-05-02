import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  @Output() toggleSidebarEvent = new EventEmitter<void>();

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
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

}
