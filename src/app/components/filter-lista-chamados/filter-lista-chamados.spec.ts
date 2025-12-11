import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListaChamados } from './filter-lista-chamados';

describe('FilterListaChamados', () => {
  let component: FilterListaChamados;
  let fixture: ComponentFixture<FilterListaChamados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterListaChamados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterListaChamados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
