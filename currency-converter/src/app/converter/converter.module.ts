import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConverterComponent } from './components';
import { CoinService, ConverterService } from './services';
import { NumberDirective } from './directives';
import { ModalQuotationComponent } from './utils';
import { DateBrPipe } from './pipes';

@NgModule({
  declarations: [
    ConverterComponent,
    NumberDirective,
    ModalQuotationComponent,
    DateBrPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ConverterComponent
  ],
  providers:[
    CoinService,
    ConverterService
  ]
})
export class ConverterModule { }
