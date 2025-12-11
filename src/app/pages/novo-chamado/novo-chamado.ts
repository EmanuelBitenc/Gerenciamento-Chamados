import { Component, OnInit } from '@angular/core';
import { Headerpages } from '../../components/headerpages/headerpages';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';

interface Categoria {
  label: string;
  value: string;
}
@Component({
  selector: 'app-novo-chamado',
  imports: [
    Headerpages,
    ScrollPanelModule,
    InputTextModule,
    FloatLabelModule,
    SelectModule,
    FormsModule,
    TextareaModule,
    ButtonModule,
  ],
  templateUrl: './novo-chamado.html',
  styleUrl: './novo-chamado.css',
})
export class NovoChamado implements OnInit {
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
