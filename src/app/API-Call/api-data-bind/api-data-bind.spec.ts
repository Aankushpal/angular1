import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDataBind } from './api-data-bind';

describe('ApiDataBind', () => {
  let component: ApiDataBind;
  let fixture: ComponentFixture<ApiDataBind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiDataBind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiDataBind);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
