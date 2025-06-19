import { Component } from '@angular/core';
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
export class DashboardComponent {
  isMenuCollapsed = false; // controll the space of layout menu
}
