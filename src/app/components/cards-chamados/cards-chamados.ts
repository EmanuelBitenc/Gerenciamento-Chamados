import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
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
export class CardsChamados implements AfterViewInit {
  chamadosList: Chamado[] = [];
  chamadosPaginados: Chamado[] = [];
  primeiro: number = 0;
  quantidadePagina: number = 6;
  totalChamados: number = 0;

  isLoading: boolean = true;

  constructor(private chamadoService: ChamadoService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.carregarChamados();
  }

  carregarChamados() {
    this.isLoading = true;

    this.chamadoService.getChamados().subscribe({
      next: (response: Chamado[]) => {
        this.chamadosList = response;
        this.totalChamados = this.chamadosList.length;
        this.chamadosPaginadosUpdate();
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Erro ao buscar chamados:', error);
        this.isLoading = false;
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
