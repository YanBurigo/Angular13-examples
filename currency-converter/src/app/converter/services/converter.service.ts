import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
 Converter,
 ConverterResponse 
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  //Nova url do fixer.io, que adiciona o parâmetro access_key, que é a chave de autenticação 
  //private readonly BASE_URL = "http://api.fixer.io/latest";
  //Outra key 0138904fb6412bdba3aafede67e6c015
  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3";
  constructor(private http: HttpClient) {}
  /**
   * Realiza a chamada para a API de conversão de moedas.
   *
   * @param Conversao converter
   * @return Observable<ConversaoResponse>
   */
  convert(converter: Converter): Observable<any> {
  let params = `&base=${converter.coinFrom}&symbols=${converter.coinTo}`;
  return this.http
      .get(this.BASE_URL + params);
      // No Angular 6+ as duas próximas linha não são mais necessárias
      //.map(response => response.json() as ConversaoResponse)
      //.catch(error => Observable.throw(error));
  }
  /**
   * Retorna a cotação para dado uma response.
   *
   * @param converterResponse converterResponse
   * @param converter converter
   * @return number
   */
  quotationTo(converterResponse: ConverterResponse, 
    converter: Converter): number {
  if (converterResponse === undefined) {
    return 0;
  }
    return converterResponse.rates[converter.coinTo];
  }
  /**
   * Retorna a cotação de dado uma response.
   *
   * @param converterResponse converterResponse
   * @param converter converter
   * @return string
   */
  quotationFrom(converterResponse: ConverterResponse, 
    converter: Converter): string {
  if (converterResponse === undefined) {
    return '0';
  }
  return (1 / converterResponse.rates[converter.coinTo])
    .toFixed(4);
  }
  /**
   * Retorna a data da cotação dado uma response.
   *
   * @param converterResponse converterResponse
   * @return string
   */
  dateQuotation(converterResponse: ConverterResponse): string {
    if (converterResponse === undefined) {
      return '';
    }
    return converterResponse.date;
  }
}
