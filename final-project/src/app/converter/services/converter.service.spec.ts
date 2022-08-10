import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { ConverterService } from './converter.service';

describe('ConverterService', () => {
  let service: ConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ConverterService ],
      imports: [ HttpClient ]
    });
    service = TestBed.inject(ConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
