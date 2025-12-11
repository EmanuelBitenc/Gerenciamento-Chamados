import { Component } from '@angular/core';
import { ChamadosCardsResume } from '../../components/chamados-cards-resume/chamados-cards-resume';
import { TableChamados } from '../../components/table-chamados/table-chamados';

@Component({
  selector: 'app-lista-chamados',
  imports: [ChamadosCardsResume, TableChamados],
  templateUrl: './lista-chamados.html',
  styleUrl: './lista-chamados.css',
})
export class ListaChamados {}
