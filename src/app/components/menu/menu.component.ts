import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  isMenuOpen = false; // Para o mobile
  isCollapsed = false; // Para o desktop

  @Output() collapsedChange = new EventEmitter<boolean>();

  ngOnInit() {
    this.checkScreenSize();
  }

  isSmallScreen = false;

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 640;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedChange.emit(this.isCollapsed);
  }
}

