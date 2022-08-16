import { Cell } from "./Cell";

export class Board {
  public cells: Cell[][] = [[]];
  constructor() {
    const generateRow = () => {
      for (let i = 0; i < 9; i++) {
        this.cells[i] = [];
        generateColumn(i);
      }
    };
    const generateColumn = (i: number) => {
      for (let j = 0; j < 9; j++) {
        this.cells[i][j] = new Cell(i, j, 0);
      }
    };
    generateRow();
  }

  public getCell(row: number, column: number): Cell {
    return this.cells[row][column];
  }

  public setCell(row: number, column: number, type: number): void {
    this.cells[row][column].type = type;
  }

  public setBottomRightCell(type: number): void {
    this.setCell(8, 8, type);
  }
}
