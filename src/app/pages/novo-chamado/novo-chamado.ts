import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Headerpages } from '../../components/headerpages/headerpages';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SelectModule } from 'primeng/select';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';
import { ChamadoService } from '../../services/chamado-service/chamado-service';
import { Chamado } from '../../model/chamado';

export interface Categoria {
  label: string;
  value: string;
}

@Component({
  selector: 'app-novo-chamado',
  imports: [
    CommonModule,
    Headerpages,
    ScrollPanelModule,
    InputTextModule,
    FloatLabelModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule,
    TextareaModule,
    ButtonModule,
    DividerModule,
    CardModule,
  ],
  templateUrl: './novo-chamado.html',
  styleUrl: './novo-chamado.css',
})
export class NovoChamado implements OnInit {
  chamadoForm!: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private fb: FormBuilder,
    private chamadoService: ChamadoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categorias = [
      { label: 'Performance', value: 'Performance' },
      { label: 'Acesso', value: 'Acesso' },
      { label: 'Funcionalidade', value: 'Funcionalidade' },
      { label: 'Infraestrutura', value: 'Infraestrutura' },
    ];

    this.chamadoForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.minLength(10)]],
      categoria: [null, [Validators.required]],
    });
  }

  criarChamado() {
    if (this.chamadoForm.valid) {
      const novoChamado: Chamado = {
        id: 0,
        titulo: this.chamadoForm.value.titulo,
        descricao: this.chamadoForm.value.descricao,
        categoria: this.chamadoForm.value.categoria.value || this.chamadoForm.value.categoria,
      };

      this.chamadoService.salvarChamado(novoChamado);

      this.router.navigate(['/']);
    }
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}
