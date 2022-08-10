import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('should ...', inject([CalculatorService], 
    (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));

  it('deve garantir que 1 + 4 = 5', 
    inject([CalculatorService], (service: CalculatorService) => {
      let soma = service.calcular(1, 4, CalculatorService.SOMA);
      expect(soma).toEqual(5);
    })
  );

  it('deve garantir que 1 - 4 = -3', 
    inject([CalculatorService], (service: CalculatorService) => {
      let subtracao = service.calcular(1, 4, CalculatorService.SUBTRACAO);
      expect(subtracao).toEqual(-3);
    })
  );

  it('deve garantir que 1 / 4 = 0.25', 
    inject([CalculatorService], (service: CalculatorService) => {
      let divisao = service.calcular(1, 4, CalculatorService.DIVISAO);
      expect(divisao).toEqual(0.25);
    })
  );

  it('deve garantir que 1 * 4 = 4', 
    inject([CalculatorService], (service: CalculatorService) => {
      let multiplicacao = service.calcular(1, 4, CalculatorService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(4);
    })
  );

  it('deve retornar 0 para operação inválida', 
    inject([CalculatorService], (service: CalculatorService) => {
      let operacaoInvalida = service.calcular(1, 4, '%');
      expect(operacaoInvalida).toEqual(0);
    })
  );
});
