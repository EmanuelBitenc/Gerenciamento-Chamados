import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headerpages } from './headerpages';

describe('Headerpages', () => {
  let component: Headerpages;
  let fixture: ComponentFixture<Headerpages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headerpages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Headerpages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
