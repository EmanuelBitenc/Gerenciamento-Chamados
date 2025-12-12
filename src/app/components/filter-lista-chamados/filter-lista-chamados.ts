import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Categoria } from '../../pages/novo-chamado/novo-chamado';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';
import { FiltrosChamados } from '../../model/filtrosChamado';

@Component({
  selector: 'app-filter-lista-chamados',
  imports: [
    ButtonModule,
    FloatLabelModule,
    SelectModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    RouterLink,
  ],
  templateUrl: './filter-lista-chamados.html',
  styleUrl: './filter-lista-chamados.css',
})
export class FilterListaChamados implements OnInit {
  @Output() filtrosChange = new EventEmitter<FiltrosChamados>();

  selectedCategoria: Categoria | undefined;
  pesquisa: string = '';
  categorias: Categoria[] = [];

  ngOnInit() {
    this.categorias = [
      { label: 'Performance', value: 'Performance' },
      { label: 'Acesso', value: 'Acesso' },
      { label: 'Funcionalidade', value: 'Funcionalidade' },
      { label: 'Infraestrutura', value: 'Infraestrutura' },
    ];
  }

  onFiltroChange() {
    this.filtrosChange.emit({
      pesquisa: this.pesquisa,
      categoria: this.selectedCategoria?.value || null,
    });
  }
}
