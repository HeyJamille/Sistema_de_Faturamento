import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards-recent-invoices',
  imports: [CommonModule, FormsModule],   
  templateUrl: './cards-recent-invoices.component.html',
})
export class CardsRecentInvoicesComponent {
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
  ];
}
