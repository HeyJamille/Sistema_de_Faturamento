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
    {
      fornecedor: "Empresa F",
      vencimento: "20/06/2025",
      data_enviada: "12/06/2025",
      status: "Pendente"
    },
    {
      fornecedor: "Empresa G",
      vencimento: "25/06/2025",
      data_enviada: "18/06/2025",
      status: "Vencido"
    },
    {
      fornecedor: "Empresa H",
      vencimento: "23/09/2025",
      data_enviada: "10/09/2025",
      status: "Pendente"
    },
  ];

  edit(data: any) {
    console.log('Editar:', data);
    // Aqui você abre um modal, formulário ou executa a lógica de edição
  }

  delete(data: any) {
    const confirmDelete = confirm(`Deseja realmente excluir a fatura de ${data.fornecedor}?`);
    if (confirmDelete) {
      this.datas = this.datas.filter(item => item !== data);
    }
  }

}
