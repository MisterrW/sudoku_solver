var Grid = require('./model/grid.js')
var Check = require('./model/check.js')
var MainView = require('./view/mainView.jsx')

class Main {

  constructor(){
    console.log("in main constructor")
    this.check = new Check()
    this.mainView = new MainView()
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

    this.medGrid2 = [

      [[ ], [8], [3], [ ], [ ], [2], [4], [ ], [ ]],
      [[ ], [4], [ ], [3], [ ], [7], [ ], [ ], [ ]],
      [[ ], [6], [ ], [ ], [ ], [ ], [ ], [3], [8]],
      [[3], [ ], [5], [ ], [ ], [ ], [ ], [1], [ ]],
      [[ ], [ ], [ ], [9], [ ], [8], [ ], [ ], [ ]],
      [[ ], [1], [ ], [ ], [ ], [ ], [6], [ ], [2]],
      [[4], [2], [ ], [ ], [ ], [ ], [ ], [7], [ ]],
      [[ ], [ ], [ ], [4], [ ], [1], [ ], [8], [ ]],
      [[ ], [ ], [8], [7], [ ], [ ], [3], [2], [ ]],

    ]

    this.hardGrid = [

      [[ ], [ ], [7], [ ], [8], [ ], [4], [ ], [6]],
      [[ ], [ ], [ ], [1], [ ], [4], [ ], [ ], [ ]],
      [[ ], [9], [8], [ ], [ ], [ ], [ ], [ ], [2]],
      [[ ], [3], [ ], [ ], [ ], [ ], [ ], [9], [8]],
      [[ ], [ ], [ ], [3], [6], [9], [ ], [ ], [ ]],
      [[6], [4], [ ], [ ], [ ], [ ], [ ], [1], [ ]],
      [[1], [ ], [ ], [ ], [ ], [ ], [7], [6], [ ]],
      [[ ], [ ], [ ], [7], [ ], [8], [ ], [ ], [ ]],
      [[7], [ ], [5], [ ], [9], [ ], [8], [ ], [ ]],

    ]

    this.hardGrid2 = [

      [[7], [9], [5], [ ], [ ], [ ], [ ], [ ], [3]],
      [[ ], [ ], [ ], [8], [ ], [4], [ ], [ ], [ ]],
      [[ ], [ ], [4], [9], [ ], [ ], [ ], [ ], [7]],
      [[ ], [ ], [3], [ ], [ ], [ ], [6], [ ], [2]],
      [[ ], [8], [ ], [ ], [1], [ ], [ ], [3], [ ]],
      [[5], [ ], [7], [ ], [ ], [ ], [1], [ ], [ ]],
      [[1], [ ], [ ], [ ], [ ], [2], [9], [ ], [ ]],
      [[ ], [ ], [ ], [4], [ ], [9], [ ], [ ], [ ]],
      [[9], [ ], [ ], [ ], [ ], [ ], [3], [5], [6]],

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

    this.testGrid = this.hardGrid2
    this.grid = new Grid(this.testGrid)
    this.grid.checkAllSquares()
    // this.grid.printGrid()
    this.completeCheck()
  }

  allChecks(){
    console.log("Checking rows...")
    this.check.rows(this.grid)
    this.grid.checkAllSquares()
    // this.grid.printGrid()

    console.log("Checking columns...")
    this.check.columns(this.grid)
    this.grid.checkAllSquares()
    // this.grid.printGrid()

    console.log("Checking 3x3s...")
    this.check.threeXthrees(this.grid)
    this.grid.checkAllSquares()

    this.grid.printGrid()
    this.mainView.update(this.grid.grid)
    this.completeCheck()
  }

  completeCheck(){
    console.log(this.grid.checkAllSquares())

    if (this.grid.checkAllSquares() === 81){
      console.log("game complete in", this.rounds, "rounds of checks")
    } else {
      console.log("round", this.rounds+1)
      if (this.lastCheckedValue === this.grid.countAllPossibles()){
        // if(1 !== 1) {
        console.log("I can't solve this. Make me better!")
        // this.grid.printGrid()
        this.mainView.update(this.grid.grid)
      } else {
        this.rounds += 1
        this.lastCheckedValue = this.grid.countAllPossibles()
        // var nextRound = setTimeout(this.allChecks.bind(this), 1000)
        this.allChecks()
      }
    }
  }
}

module.exports = Main
