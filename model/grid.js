import Square from './square'

export default class Grid {
  constructor(inputGrid){

    this.grid = [
      [[], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], []],
    ]

    inputGrid.eachWithIndex((row, rowIndex) => {
      row.eachWithIndex((square, columnIndex) => {
        if (square !== "-") {
          this.grid[rowIndex][columnIndex] = new Square({value: square})
        } else {
          this.grid[rowIndex][columnIndex] = new Square()
        }
      })
    })
  }

}
