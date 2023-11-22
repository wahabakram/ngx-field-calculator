import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFieldCalculatorComponent } from './ngx-field-calculator.component';

describe('NgxFieldCalculatorComponent', () => {
  let component: NgxFieldCalculatorComponent;
  let fixture: ComponentFixture<NgxFieldCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFieldCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFieldCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
