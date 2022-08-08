import { 
	Component, Input, Output, EventEmitter, OnInit
} from '@angular/core';

import { ConverterResponse, Converter } from '../models/';
import { ConverterService } from '../services';

@Component({
  selector: 'modal-quotation',
  templateUrl: './modal-quotation.component.html',
  styleUrls: ['./modal-quotation.component.css']
})
export class ModalQuotationComponent implements OnInit {

	@Input() id: string;
	@Input() converterResponse: ConverterResponse;
	@Input() converter: Converter = new Converter();
	@Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

	constructor(private converterService: ConverterService) {}

	ngOnInit() {}

	newQuery() {
		this.onConfirm.emit();
	}

	get valueConverted(): string {
	  	if (this.converterResponse === undefined) {
	  		return '0';
	  	}
	  	
	  	return (this.converter.value * 
	  		this.converterResponse.rates[this.converter.coinTo])
	  			.toFixed(2);
	}

	get quotationTo(): number {
	  	return this.converterService.quotationTo(
	  		this.converterResponse, this.converter);
	}

	get quotationFrom(): string {
	  	return this.converterService.quotationFrom(
	  		this.converterResponse, this.converter);
	}

	get dateQuotation(): string {
		return this.converterService.dateQuotation(
	  		this.converterResponse);
	}
}
