import { Board } from "./Board";
import { Player } from "./Player";

export class Game {
  public board: Board;
  public playerA: Player;
  public playerB: Player;
  public whichPlayer: Player;
  public gameOver: boolean;
  constructor(board: Board, playerA: Player, playerB: Player) {
    this.board = board;
    this.playerA = playerA;
    this.playerB = playerB;
    this.whichPlayer = playerA;
    this.gameOver = false;
  }
  public getBoard(): Board {
    return this.board;
  }
  public getPlayerA(): Player {
    return this.playerA;
  }
  public getPlayerB(): Player {
    return this.playerB;
  }
  public getWhichPlayer(): Player {
    return this.whichPlayer;
  }
  public getGameOver(): boolean {
    return this.gameOver;
  }
  public setBoard(board: Board): void {
    this.board = board;
  }
  public setPlayerA(playerA: Player): void {
    this.playerA = playerA;
  }
  public setPlayerB(playerB: Player): void {
    this.playerB = playerB;
  }
  public setWhichPlayer(whichPlayer: Player): void {
    this.whichPlayer = whichPlayer;
  }
  public setGameOver(gameOver: boolean): void {
    this.gameOver = gameOver;
  }
}
