import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { RegisterCardsComponent } from '../../components/UI/register-cards/register-cards.component';

@Component({
  selector: 'app-header-recent-envoices',
  imports: [CommonModule, FormsModule, RegisterCardsComponent],
  templateUrl: './header-recent-envoices.component.html',
})
export class HeaderRecentEnvoicesComponent {
  @ViewChild(RegisterCardsComponent) registerCard!: RegisterCardsComponent;

  openCard() {
    this.registerCard.showCard = true;
  }

  pageTitle = '';

  constructor(private router: Router) {
    this.setPageTitle();
  }

  setPageTitle() {
    const path = this.router.url;
    if (path.includes('dashboard')) {
      this.pageTitle = 'Faturas Recentes';
    } else if (path.includes('faturas')) {
      this.pageTitle = 'Todas as Faturas';
    }
  }
}

