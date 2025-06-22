import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CardsRecentInvoicesComponent } from "../../components/UI/cards-recent-invoices/cards-recent-invoices.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { HeaderRecentEnvoicesComponent } from "../../components/header-recent-envoices/header-recent-envoices.component";

@Component({
  selector: 'app-envoices',
  imports: [MenuComponent, CardsRecentInvoicesComponent, CommonModule, HeaderRecentEnvoicesComponent],
  templateUrl: './envoices.component.html',
})
export class EnvoicesComponent {
  isSmallScreen = false; // menu mobile
  isMenuCollapsed = false; // mobile desktop

  ngOnInit() {
    this.checkScreenSize();
  }

  // listens to window size changes and small screen updates in real time.
  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 640; // Tailwind 'sm' breakpoint
  }
}
