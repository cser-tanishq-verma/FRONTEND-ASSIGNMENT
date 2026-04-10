import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childcomp } from './childcomp';

describe('Childcomp', () => {
  let component: Childcomp;
  let fixture: ComponentFixture<Childcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Childcomp],
    }).compileComponents();

    fixture = TestBed.createComponent(Childcomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
