import { TestBed } from '@angular/core/testing';

import { NgxFieldCalculatorService } from './ngx-field-calculator.service';

describe('NgxFieldCalculatorService', () => {
  let service: NgxFieldCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFieldCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
