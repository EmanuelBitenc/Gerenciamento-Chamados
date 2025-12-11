import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadosCardsResume } from './chamados-cards-resume';

describe('ChamadosCardsResume', () => {
  let component: ChamadosCardsResume;
  let fixture: ComponentFixture<ChamadosCardsResume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChamadosCardsResume],
    }).compileComponents();

    fixture = TestBed.createComponent(ChamadosCardsResume);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
