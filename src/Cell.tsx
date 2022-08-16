export class Cell {
  public row: number;
  public column: number;
  //type is white or black cell
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
}
