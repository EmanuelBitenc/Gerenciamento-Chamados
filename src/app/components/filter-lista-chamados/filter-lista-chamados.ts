import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Categoria } from '../../pages/novo-chamado/novo-chamado';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';

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
  selectedCategoria: Categoria | undefined;

  categorias: Categoria[] = [];

  ngOnInit() {
    this.categorias = [
      { label: 'Performance', value: 'performance' },
      { label: 'Acesso', value: 'acesso' },
      { label: 'Funcionalidade', value: 'funcionalidade' },
      { label: 'Infraestrutura', value: 'infraestrutura' },
    ];
  }
}
