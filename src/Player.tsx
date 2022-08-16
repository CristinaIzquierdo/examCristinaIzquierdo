import { Board } from "./Board";
import { Piece } from "./Pieces";

export class Player {
  public name: string;
  public pieces: Piece[];
  constructor(name: string) {
    this.name = name;
    this.pieces = [];
  }
  public getName(): string {
    return this.name;
  }
  public getPieces(): Piece[] {
    return this.pieces;
  }
  public setName(name: string): void {
    this.name = name;
  }
  public setPieces(pieces: Piece[]): void {
    this.pieces = pieces;
  }

  public setPiecesForPlayer(type: number): void {
    for (let i = 0; i < 12; i++) {
      this.pieces.push(new Piece(i, i, type));
    }
  }

  public setPiecesInBoard(board: Board): void {
    for (let i = 0; i < this.pieces.length; i++) {
      board.setCell(
        this.pieces[i].getRow(),
        this.pieces[i].getColumn(),
        this.pieces[i].getType()
      );
    }
  }
}
