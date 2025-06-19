import { Component } from '@angular/core';
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
  isMenuCollapsed = false; // controll the space of layout menu
}
