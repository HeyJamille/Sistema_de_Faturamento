import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-cards',
  imports: [CommonModule],
  templateUrl: './register-cards.component.html',
})
export class RegisterCardsComponent {
  showCard = false;
}
