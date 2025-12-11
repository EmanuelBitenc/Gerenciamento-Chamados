import { Component } from '@angular/core';
import { ChamadosCardsResume } from '../../components/chamados-cards-resume/chamados-cards-resume';
import { TableChamados } from '../../components/table-chamados/table-chamados';
import { Headerpages } from '../../components/headerpages/headerpages';
import { FilterListaChamados } from '../../components/filter-lista-chamados/filter-lista-chamados';
import { CardsChamados } from '../../components/cards-chamados/cards-chamados';

@Component({
  selector: 'app-lista-chamados',
  imports: [ChamadosCardsResume, TableChamados, Headerpages, FilterListaChamados, CardsChamados],
  templateUrl: './lista-chamados.html',
  styleUrl: './lista-chamados.css',
})
export class ListaChamados {}
