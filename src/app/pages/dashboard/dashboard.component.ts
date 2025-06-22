import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CardsComponent } from '../../components/UI/cards/cards.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CardsRecentInvoicesComponent } from '../../components/UI/cards-recent-invoices/cards-recent-invoices.component';
import { HeaderRecentEnvoicesComponent } from "../../components/header-recent-envoices/header-recent-envoices.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MenuComponent, CardsComponent, CardsRecentInvoicesComponent, HeaderRecentEnvoicesComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
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