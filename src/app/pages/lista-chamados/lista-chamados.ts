import { Component } from '@angular/core';
import { ChamadosCardsResume } from '../../components/chamados-cards-resume/chamados-cards-resume';
import { TableChamados } from '../../components/table-chamados/table-chamados';
import { Headerpages } from '../../components/headerpages/headerpages';

@Component({
  selector: 'app-lista-chamados',
  imports: [ChamadosCardsResume, TableChamados, Headerpages],
  templateUrl: './lista-chamados.html',
  styleUrl: './lista-chamados.css',
})
export class ListaChamados {}
