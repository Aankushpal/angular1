import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdForm } from './td-form';

describe('TdForm', () => {
  let component: TdForm;
  let fixture: ComponentFixture<TdForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TdForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
