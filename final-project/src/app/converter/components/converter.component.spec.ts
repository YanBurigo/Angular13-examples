import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ConverterComponent } from './converter.component';
import { CoinService, ConverterService } from '../services';
import { NumberDirective } from '../directives';
import { DateBrPipe } from '../pipes';
import { ModalQuotationComponent } from '../utils';

describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterComponent, NumberDirective, DateBrPipe, ModalQuotationComponent ],
      providers: [ CoinService, ConverterService ],
      imports: [ FormsModule, HttpClient ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
