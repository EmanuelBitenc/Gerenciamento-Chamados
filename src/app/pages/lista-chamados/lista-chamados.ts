import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChamadosCardsResume } from '../../components/chamados-cards-resume/chamados-cards-resume';
import { Headerpages } from '../../components/headerpages/headerpages';
import { FilterListaChamados } from '../../components/filter-lista-chamados/filter-lista-chamados';
import { CardsChamados } from '../../components/cards-chamados/cards-chamados';
import { Chamado } from '../../core/model/chamado';
import { ChamadoService } from '../../core/services/chamado-service/chamado-service';
import { FiltrosChamados } from '../../core/model/filtrosChamado';

@Component({
  selector: 'app-lista-chamados',
  imports: [CommonModule, ChamadosCardsResume, Headerpages, FilterListaChamados, CardsChamados],
  templateUrl: './lista-chamados.html',
  styleUrl: './lista-chamados.css',
})
export class ListaChamados implements OnInit {
  todosChamados: Chamado[] = [];
  chamadosFiltrados: Chamado[] = [];

  get quantidadePerformance(): number {
    return this.todosChamados.filter((c) => c.categoria === 'Performance').length;
  }

  get quantidadeAcesso(): number {
    return this.todosChamados.filter((c) => c.categoria === 'Acesso').length;
  }

  get quantidadeFuncionalidade(): number {
    return this.todosChamados.filter((c) => c.categoria === 'Funcionalidade').length;
  }

  get quantidadeInfraestrutura(): number {
    return this.todosChamados.filter((c) => c.categoria === 'Infraestrutura').length;
  }

  constructor(private chamadoService: ChamadoService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.carregarChamados();
  }

  carregarChamados() {
    this.chamadoService.getChamados().subscribe({
      next: (chamados) => {
        this.todosChamados = chamados;
        this.chamadosFiltrados = chamados;
        this.cdr.detectChanges();
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
