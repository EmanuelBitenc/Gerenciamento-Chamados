import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarItens } from './sidebar-itens';

describe('SidebarItens', () => {
  let component: SidebarItens;
  let fixture: ComponentFixture<SidebarItens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarItens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarItens);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
