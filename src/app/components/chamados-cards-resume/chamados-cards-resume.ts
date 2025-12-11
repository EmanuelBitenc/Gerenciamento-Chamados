import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-chamados-cards-resume',
  imports: [],
  templateUrl: './chamados-cards-resume.html',
  styleUrl: './chamados-cards-resume.css',
})
export class ChamadosCardsResume {
  @Input() label: string = '';
  @Input() value: number = 0;
}
