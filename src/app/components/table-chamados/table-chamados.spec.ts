import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChamados } from './table-chamados';

describe('TableChamados', () => {
  let component: TableChamados;
  let fixture: ComponentFixture<TableChamados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableChamados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableChamados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
