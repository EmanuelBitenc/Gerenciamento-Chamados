import {
  Component,
  ChangeDetectorRef,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { Chamado } from '../../model/chamado';
import { ChamadoService } from '../../services/chamado-service/chamado-service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-cards-chamados',
  imports: [CardModule, TagModule, CommonModule, PaginatorModule, ProgressSpinnerModule],
  templateUrl: './cards-chamados.html',
  styleUrl: './cards-chamados.css',
})
export class CardsChamados implements AfterViewInit, OnChanges {
  @Input() chamadosFiltrados: Chamado[] = [];

  chamadosList: Chamado[] = [];
  chamadosPaginados: Chamado[] = [];
  primeiro: number = 0;
  quantidadePagina: number = 6;
  totalChamados: number = 0;

  constructor(private chamadoService: ChamadoService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.carregarChamados();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chamadosFiltrados'] && !changes['chamadosFiltrados'].firstChange) {
      this.chamadosList = this.chamadosFiltrados;
      this.totalChamados = this.chamadosList.length;
      this.primeiro = 0;
      this.chamadosPaginadosUpdate();
      this.cdr.detectChanges();
    }
  }

  carregarChamados() {
    this.chamadoService.getChamados().subscribe({
      next: (response: Chamado[]) => {
        this.chamadosList = response;
        this.totalChamados = this.chamadosList.length;
        this.chamadosPaginadosUpdate();
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Erro ao buscar chamados:', error);
        this.cdr.detectChanges();
      },
    });
  }

  onTrocaPagina(event: any) {
    this.primeiro = event.first;
    this.quantidadePagina = event.rows;
    this.chamadosPaginadosUpdate();
    this.cdr.detectChanges();
  }

  chamadosPaginadosUpdate() {
    this.chamadosPaginados = this.chamadosList.slice(
      this.primeiro,
      this.primeiro + this.quantidadePagina
    );
  }
}
