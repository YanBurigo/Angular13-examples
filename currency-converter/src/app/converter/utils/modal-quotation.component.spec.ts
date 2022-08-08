import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { ModalQuotationComponent } from './modal-quotation.component';
import { DateBrPipe } from '../pipes';
import { ConverterService } from '../services';

describe('ModalQuotationComponent', () => {
  let component: ModalQuotationComponent;
  let fixture: ComponentFixture<ModalQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalQuotationComponent, DateBrPipe ],
      providers: [ ConverterService ],
      imports: [ HttpClient ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
