var Grid = require('./model/grid.js')
var Check = require('./model/check.js')

class Main {

  constructor(){

    this.check = new Check()
    this.testGrid = [

      [[1], [ ], [ ], [5], [2], [ ], [ ], [ ], [9]],
      [[2], [3], [ ], [1], [4], [6], [5], [ ], [7]],
      [[ ], [ ], [ ], [ ], [ ], [ ], [ ], [2], [ ]],
      [[ ], [1], [4], [8], [6], [ ], [3], [ ], [ ]],
      [[7], [ ], [8], [ ], [ ], [ ], [6], [ ], [5]],
      [[ ], [ ], [3], [ ], [5], [2], [8], [7], [ ]],
      [[ ], [9], [ ], [ ], [ ], [ ], [ ], [ ], [ ]],
      [[8], [ ], [2], [9], [3], [4], [ ], [1], [6]],
      [[4], [ ], [ ], [ ], [1], [5], [ ], [ ], [8]],

    ]

    this.grid = new Grid(this.testGrid)
    this.grid.checkAllSquares()
    this.grid.printGrid()

    this.allChecks()
    this.allChecks()
    this.allChecks()
    this.allChecks()
  }

  allChecks(){
    console.log("Checking rows")
    this.check.rows(this.grid)
    this.grid.checkAllSquares()
    this.grid.printGrid()

    console.log("Checking columns")
    this.check.columns(this.grid)
    this.grid.checkAllSquares()
    this.grid.printGrid()

    console.log("Checking 3x3s")
    this.check.threeXthrees(this.grid)
    this.grid.checkAllSquares()
    this.grid.printGrid()
  }
}

module.exports = Main
