import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChamadosCardsResume } from '../../components/chamados-cards-resume/chamados-cards-resume';
import { Headerpages } from '../../components/headerpages/headerpages';
import { FilterListaChamados } from '../../components/filter-lista-chamados/filter-lista-chamados';
import { CardsChamados } from '../../components/cards-chamados/cards-chamados';
import { ChamadoService } from '../../services/chamado-service/chamado-service';
import { Chamado } from '../../model/chamado';
import { FiltrosChamados } from '../../model/filtrosChamado';

@Component({
  selector: 'app-lista-chamados',
  imports: [CommonModule, ChamadosCardsResume, Headerpages, FilterListaChamados, CardsChamados],
  templateUrl: './lista-chamados.html',
  styleUrl: './lista-chamados.css',
})
export class ListaChamados implements AfterViewInit {
  todosChamados: Chamado[] = [];
  chamadosFiltrados: Chamado[] = [];

  constructor(private chamadoService: ChamadoService) {}

  ngAfterViewInit() {
    this.carregarChamados();
  }

  carregarChamados() {
    this.chamadoService.getChamados().subscribe({
      next: (chamados) => {
        setTimeout(() => {
          this.todosChamados = chamados;
          this.chamadosFiltrados = chamados;
        }, 0);
      },
      error: (error) => {
        console.error('Erro ao carregar chamados:', error);
      },
    });
  }

  aplicarFiltros(filtros: FiltrosChamados) {
    this.chamadosFiltrados = this.todosChamados.filter((chamado) => {
      const matchPesquisa =
        !filtros.pesquisa ||
        chamado.titulo.toLowerCase().includes(filtros.pesquisa.toLowerCase()) ||
        chamado.id.toString().includes(filtros.pesquisa);

      const matchCategoria = !filtros.categoria || chamado.categoria === filtros.categoria;

      return matchPesquisa && matchCategoria;
    });
  }
}
