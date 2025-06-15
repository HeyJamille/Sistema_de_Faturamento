import { Component } from '@angular/core';

// Components
import { CardsComponent } from '../../components/UI/cards/cards.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CardsRecentInvoicesComponent } from '../../components/UI/cards-recent-invoices/cards-recent-invoices.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, CardsComponent, CardsRecentInvoicesComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  
}
