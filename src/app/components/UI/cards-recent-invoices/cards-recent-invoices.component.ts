import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCardsComponent } from "../register-cards/register-cards.component";

@Component({
  selector: 'app-cards-recent-invoices',
  imports: [CommonModule, FormsModule, RegisterCardsComponent],   
  templateUrl: './cards-recent-invoices.component.html',
})
export class CardsRecentInvoicesComponent {
  @ViewChild(RegisterCardsComponent) registerCard!: RegisterCardsComponent;

  openCard() {
    this.registerCard.showCard = true;
  }

  datas = [
    {
      fornecedor: "Empresa A",
      vencimento: "15/06/2025",
      data_enviada: "10/06/2025",
      status: "Pago"
    },
    {
      fornecedor: "Empresa B",
      vencimento: "20/06/2025",
      data_enviada: "12/06/2025",
      status: "Pendente"
    },
    {
      fornecedor: "Empresa C",
      vencimento: "25/06/2025",
      data_enviada: "18/06/2025",
      status: "Vencido"
    },
    {
      fornecedor: "Empresa E",
      vencimento: "23/09/2025",
      data_enviada: "10/09/2025",
      status: "Pendente"
    },
    {
      fornecedor: "Empresa F",
      vencimento: "23/09/2025",
      data_enviada: "10/09/2025",
      status: "Pago"
    },
  ];
}
