import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Coin, Converter, ConverterResponse } from '../models';
import { CoinService, ConverterService } from '../services';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  coins: Coin[];
  converter: Converter;
  hasError: boolean;
  converterResponse: ConverterResponse;

  @ViewChild("converterForm", { static: true }) converterForm: NgForm;

  constructor(
    private coinService: CoinService,
    private converterService: ConverterService) {}

  ngOnInit() {
  	this.coins = this.coinService.listarTodas();
  	this.init();
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   *
   * @return void
   */
  init(): void {
  	this.converter = new Converter('USD', 'BRL', null);
  	this.hasError = false;
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   *
   * @return void
   */
  convert(): void {
  	if (this.converterForm.form.valid) {
  	  this.converterService
        .convert(this.converter)
        .subscribe(
          response => this.converterResponse = response,
          error => this.hasError = true
        );
  	}
  }
}
