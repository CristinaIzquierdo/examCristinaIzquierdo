export class Piece {
  public row: number;
  public column: number;
  public type: number;
  constructor(row: number, column: number, type: number) {
    this.row = row;
    this.column = column;
    this.type = type;
  }
  public getType(): number {
    return this.type;
  }
  public getRow(): number {
    return this.row;
  }
  public getColumn(): number {
    return this.column;
  }
  public setRow(row: number): void {
    this.row = row;
  }
  public setColumn(column: number): void {
    this.column = column;
  }
  public setType(type: number): void {
    this.type = type;
  }
}
