import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
interface Chamado {
  id: number;
  titulo: string;
  descricao: string;
  categoria: string;
}

@Component({
  selector: 'app-cards-chamados',
  imports: [CardModule, TagModule, CommonModule, PaginatorModule],
  templateUrl: './cards-chamados.html',
  styleUrl: './cards-chamados.css',
})
export class CardsChamados implements OnInit {
  chamados: Chamado[] = [];
  chamadosPaginados: Chamado[] = [];
  first: number = 0;
  rows: number = 9;
  totalRecords: number = 0;

  ngOnInit() {
    this.chamados = [
      {
        id: 1,
        titulo: 'Sistema lento',
        descricao: 'O sistema está apresentando lentidão ao carregar as páginas',
        categoria: 'Performance',
      },
      {
        id: 2,
        titulo: 'Erro de login',
        descricao: 'Usuários não conseguem fazer login no sistema',
        categoria: 'Acesso',
      },
      {
        id: 3,
        titulo: 'Relatório não gera',
        descricao: 'O relatório mensal não está sendo gerado corretamente',
        categoria: 'Funcionalidade',
      },
      {
        id: 4,
        titulo: 'Erro de infra',
        descricao: 'Servidor indisponível para acesso',
        categoria: 'Infraestrutura',
      },
      {
        id: 5,
        titulo: 'Banco de dados',
        descricao: 'Erro de conexão com o banco de dados',
        categoria: 'Infraestrutura',
      },
      {
        id: 6,
        titulo: 'Cache não funciona',
        descricao: 'Sistema de cache não está funcionando adequadamente',
        categoria: 'Performance',
      },
      {
        id: 7,
        titulo: 'Reset de senha',
        descricao: 'Funcionalidade de reset de senha não envia email',
        categoria: 'Acesso',
      },
      {
        id: 8,
        titulo: 'Filtros quebrados',
        descricao: 'Os filtros da listagem não estão funcionando',
        categoria: 'Funcionalidade',
      },
      {
        id: 9,
        titulo: 'Erro de login',
        descricao: 'Usuários não conseguem fazer login no sistema',
        categoria: 'Acesso',
      },
      {
        id: 10,
        titulo: 'Backup falhou',
        descricao: 'O backup automático falhou na execução',
        categoria: 'Infraestrutura',
      },
      {
        id: 11,
        titulo: 'API lenta',
        descricao: 'Endpoints da API estão com tempo de resposta elevado',
        categoria: 'Performance',
      },
      {
        id: 12,
        titulo: 'Permissões incorretas',
        descricao: 'Usuários vendo dados que não deveriam ter acesso',
        categoria: 'Acesso',
      },
    ];
    this.totalRecords = this.chamados.length;
    this.updatePaginatedChamados();
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.updatePaginatedChamados();
  }

  updatePaginatedChamados() {
    this.chamadosPaginados = this.chamados.slice(this.first, this.first + this.rows);
  }
}
