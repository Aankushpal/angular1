import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmp } from './show-emp';

describe('ShowEmp', () => {
  let component: ShowEmp;
  let fixture: ComponentFixture<ShowEmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowEmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowEmp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
