import { Component, OnInit } from '@angular/core';

import { TicTacToeService } from './shared';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  constructor(private ticTacToeService: TicTacToeService) { }

  ngOnInit() {
  	this.ticTacToeService.inicializar();
  }

  /**
   * Retorna se a tela de início deve ser exibida.
   * 
   * @return boolean
   */
  get showInicio(): boolean {
  	return this.ticTacToeService.showInicio;
  }

  /**
   * Retorna se o tabuleiro deve ser exibido.
   * 
   * @return boolean
   */
  get showTabuleiro(): boolean {
  	return this.ticTacToeService.showTabuleiro;
  }

  /**
   * Retorna se a tela de fim de jogo deve ser exibida.
   * 
   * @return boolean
   */
  get showFinal(): boolean {
  	return this.ticTacToeService.showFinal;
  }

  /**
   * Inicializa os dados de um novo jogo.
   *
   * @return void
   */
  iniciarJogo(): void {
  	this.ticTacToeService.iniciarJogo();
  }

  /**
   * Realiza uma jogada ao clicar um local no tabuleiro.
   *
   * @param number posX
   * @param number posY
   * @return void
   */
  jogar(posX: number, posY: number): void {
  	this.ticTacToeService.jogar(posX, posY);
  }

  /**
   * Retorna se a peça X deve ser exibida para a 
   * coordena informada.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirX(posX: number, posY: number): boolean {
  	return this.ticTacToeService.exibirX(posX, posY);
  }

  /**
   * Retorna se a peça O deve ser exibida para a 
   * coordena informada.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirO(posX: number, posY: number): boolean {
  	return this.ticTacToeService.exibirO(posX, posY);
  }

  /**
   * Retorna se a marcação de vitória deve ser exibida para a 
   * coordena informada.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirVitoria(posX: number, posY: number): boolean {
  	return this.ticTacToeService.exibirVitoria(posX, posY);
  }

  /**
   * Retorna o número do jogador a jogar.
   * 
   * @return number
   */
  get jogador(): number {
  	return this.ticTacToeService.jogador;
  }

  /**
   * Inicia um novo jogo.
   * 
   * @return void
   */
  novoJogo(): void {
  	this.ticTacToeService.novoJogo();
  }

}
