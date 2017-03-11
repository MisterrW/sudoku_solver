var Grid = require('./model/grid.js')
var Check = require('./model/check.js')

class Main {

  constructor(){

    this.check = new Check()
    this.rounds = 0

    this.medGrid = [
      //medium
      [[ ], [2], [ ], [3], [ ], [1], [7], [ ], [ ]],
      [[ ], [ ], [3], [ ], [ ], [8], [ ], [5], [6]],
      [[ ], [7], [8], [ ], [ ], [6], [ ], [9], [ ]],
      [[3], [ ], [2], [ ], [8], [ ], [ ], [ ], [ ]],
      [[ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ]],
      [[ ], [ ], [ ], [ ], [3], [ ], [4], [ ], [5]],
      [[ ], [6], [ ], [5], [ ], [ ], [9], [8], [ ]],
      [[9], [3], [ ], [8], [ ], [ ], [6], [ ], [ ]],
      [[ ], [ ], [7], [6], [ ], [3], [ ], [2], [ ]],

    ]
    this.easyGrid = [
    // easy
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

    // this.testGrid = [
    //
    //   [[ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ]],
    //   [[ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ]],
    //   [[ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ]],
    //   [[ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ]],
    //   [[ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ]],
    //   [[ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ]],
    //   [[ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ]],
    //   [[ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ]],
    //   [[ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ]],
    //
    // ]

    this.testGrid = this.medGrid

    this.grid = new Grid(this.testGrid)
    this.grid.checkAllSquares()
    this.grid.printGrid()

    this.allChecks()
  }

  allChecks(){
    console.log("Checking rows")
    this.check.rows(this.grid)
    this.grid.checkAllSquares()
    // this.grid.printGrid()

    console.log("Checking columns")
    this.check.columns(this.grid)
    this.grid.checkAllSquares()
    // this.grid.printGrid()

    console.log("Checking 3x3s")
    this.check.threeXthrees(this.grid)
    this.grid.checkAllSquares()
    // this.grid.printGrid()

    this.completeCheck()
  }

  completeCheck(){
    this.rounds += 1
    console.log(this.grid.checkAllSquares())

    if (this.grid.checkAllSquares() === 81){
      console.log("game complete in", this.rounds, "rounds of checks")
    } else {
      console.log("round", this.rounds+1)
      if (this.lastCheckedValue === this.grid.checkAllSquares()){
        console.log("I can't solve this. Make me better!")
        console.log(this.grid.grid[1][4])
        console.log(this.grid.grid[2][3])
        console.log(this.grid.grid[2][4])
      } else {
        this.lastCheckedValue = this.grid.checkAllSquares()
        this.allChecks()
      }
    }
  }
}

module.exports = Main
