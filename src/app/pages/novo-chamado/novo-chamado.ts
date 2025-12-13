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
import { ChamadoService } from '../../core/services/chamado-service/chamado-service';
import { Chamado } from '../../core/model/chamado';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Categoria } from '../../core/model/categoria';

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
    ToastModule,
    CardModule,
  ],
  providers: [MessageService],
  templateUrl: './novo-chamado.html',
  styleUrl: './novo-chamado.css',
})
export class NovoChamado implements OnInit {
  chamadoForm!: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private fb: FormBuilder,
    private chamadoService: ChamadoService,
    private router: Router,
    private messageService: MessageService
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
        categoria: this.chamadoForm.value.categoria.value,
      };

      this.chamadoService.salvarChamado(novoChamado);
      this.showSuccess();

      setTimeout(() => {
        this.router.navigate(['/']);
      }, 1500);
    }
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso!',
      detail: 'Chamado criado com sucesso',
      life: 3000,
    });
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}
