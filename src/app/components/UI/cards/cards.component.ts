import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  templateUrl: './cards.component.html',
  imports: [CommonModule],
})
export class CardsComponent {
  cards = [
  {
    title: "Faturas Enviadas",
    quantity: 200,
    icon: "assets/icons/send.svg",
  },
  {
    title: "Faturas Pendentes",
    quantity: 50,
    icon: "assets/icons/pending.svg",
  },
  {
    title: "Vencimento hoje",
    quantity: 10,
    icon: "assets/icons/defeated.svg",
  },
  {
    title: "Pagas",
    quantity: 200,
    icon: "assets/icons/paid.svg",
  },
  
];
}
