import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsChamados } from './cards-chamados';

describe('CardsChamados', () => {
  let component: CardsChamados;
  let fixture: ComponentFixture<CardsChamados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsChamados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsChamados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
