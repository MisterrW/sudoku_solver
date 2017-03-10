var Square = require('./square')

class Grid {
  constructor(inputGrid){
    this.grid = []

    inputGrid.forEach((row, rowIndex) => {
      this.grid[rowIndex] = []
      row.forEach((square, columnIndex) => {
        if (square !== "-") {
          this.grid[rowIndex][columnIndex] = new Square({value: square[0]})
        } else {
          this.grid[rowIndex][columnIndex] = new Square()
        }
      })
    })

    this.printGrid()
  }

  printGrid(){
    const gridToPrint = [[], [], [], [], [], [], [], [], []]

    this.grid.forEach((row, rowIndex) => {
      row.forEach((square, columnIndex) => {
        if (square.value) {
          gridToPrint[rowIndex][columnIndex] = square.value.toString()
          // console.log("Value is ", square.value.toString())
        } else {
          // console.log("no value")
          gridToPrint[rowIndex][columnIndex] = " "
        }
      })
    })

    console.log("Grid printing.")
    gridToPrint.forEach((row) => {
      console.log(row)
    })

  }

}

module.exports = Grid
