import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-chamados-cards-resume',
  imports: [CardModule],
  templateUrl: './chamados-cards-resume.html',
  styleUrl: './chamados-cards-resume.css',
})
export class ChamadosCardsResume {
  @Input() label: string = '';
  @Input() value: number = 0;
}
