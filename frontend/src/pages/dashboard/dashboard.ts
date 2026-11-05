import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  faturamentoMes = 'R$ 12.850,00';
  vendasRealizadas = 342;
  pecasEstoque = 1.268;
  estoqueBaixo = 12;
 
  pedidosRecentes = [
    { id: '#1028', cliente: 'Juliana Silva', valor: 'R$ 159,90', status: 'Pago - Pix' },
    { id: '#1027', cliente: 'Mariana Costa', valor: 'R$ 89,90', status: 'Em preparo - Cartão' },
    { id: '#1026', cliente: 'Fernanda Lima', valor: 'R$ 219,90', status: 'Enviado - Pix' }
  ];
 
  produtosEstoqueBaixo = [
    { nome: 'Top Canelado Preto/M', qtd: '2 un.' },
    { nome: 'Legging Essencial Verde/G', qtd: '3 un.' },
    { nome: 'Maiô Bali Bege/P', qtd: '2 un.' },
    { nome: 'Saída de Praia Areia/M', qtd: '4 un.' }
  ];
}