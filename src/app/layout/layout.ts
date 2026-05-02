import { Component, signal } from '@angular/core';
import { Sidebar } from "./sidebar/sidebar";
import { Header } from "./header/header";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Sidebar, Header, RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

  isSidebarOpen = signal<boolean>(false);

  toggleSidebar() {
    this.isSidebarOpen.set(!this.isSidebarOpen());
  }
}
