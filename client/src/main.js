var Grid = require('./model/grid.js')
var Check = require('./model/check.js')
var CheckIntersecting3x3 = require('./model/checkIntersecting3x3.js')
var MainView = require('./view/mainView.jsx')

class Main {

  constructor(){
    this.check = new Check()
    this.checkIntersecting3x3 = new CheckIntersecting3x3()
    this.mainView = new MainView()
    this.rounds = 0
    this.timeUnit = 20

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

    this.gridToTestIntersecting3x3s = [

      [[ ], [ ], [ ], [ ], [ ], [ ], [7], [ ], [1]],
      [[ ], [ ], [ ], [ ], [ ], [ ], [8], [ ], [2]],
      [[ ], [ ], [ ], [ ], [ ], [ ], [9], [ ], [3]],
      [[ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ]],
      [[ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ]],
      [[ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ]],
      [[1], [2], [3], [ ], [ ], [ ], [ ], [ ], [ ]],
      [[4], [ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ]],
      [[7], [8], [9], [ ], [ ], [ ], [ ], [ ], [ ]],

    ]

    this.hardGrid3 = [

      [[ ], [ ], [2], [6], [ ], [ ], [ ], [ ], [9]],
      [[ ], [6], [1], [ ], [5], [ ], [ ], [ ], [3]],
      [[ ], [ ], [ ], [9], [ ], [ ], [4], [ ], [1]],
      [[ ], [8], [ ], [ ], [ ], [ ], [1], [ ], [ ]],
      [[ ], [ ], [ ], [7], [ ], [8], [ ], [ ], [ ]],
      [[ ], [ ], [3], [ ], [ ], [ ], [ ], [9], [ ]],
      [[2], [ ], [7], [ ], [ ], [3], [ ], [ ], [ ]],
      [[6], [ ], [ ], [ ], [7], [ ], [5], [3], [ ]],
      [[1], [ ], [ ], [ ], [ ], [9], [2], [ ], [ ]],

    ]

    this.extremeGrid = [

      [[8], [ ], [ ], [ ], [ ], [ ], [7], [2], [ ]],
      [[ ], [ ], [ ], [3], [4], [ ], [1], [ ], [ ]],
      [[ ], [2], [3], [ ], [ ], [ ], [ ], [ ], [ ]],
      [[5], [ ], [ ], [ ], [7], [ ], [8], [ ], [ ]],
      [[ ], [8], [ ], [6], [ ], [1], [ ], [9], [ ]],
      [[ ], [ ], [2], [ ], [5], [ ], [ ], [ ], [6]],
      [[ ], [ ], [ ], [ ], [ ], [ ], [6], [7], [ ]],
      [[ ], [ ], [9], [ ], [3], [6], [ ], [ ], [ ]],
      [[ ], [1], [8], [ ], [ ], [ ], [ ], [ ], [5]],

    ]

    this.extremeGrid2 = [

      [[ ], [ ], [ ], [ ], [ ], [ ], [ ], [4], [8]],
      [[ ], [ ], [ ], [9], [6], [ ], [ ], [ ], [ ]],
      [[7], [3], [5], [ ], [ ], [ ], [ ], [ ], [ ]],
      [[ ], [2], [4], [ ], [ ], [6], [ ], [ ], [9]],
      [[ ], [ ], [6], [ ], [2], [ ], [8], [ ], [ ]],
      [[9], [ ], [ ], [7], [ ], [ ], [3], [2], [ ]],
      [[ ], [ ], [ ], [ ], [ ], [ ], [1], [5], [3]],
      [[ ], [ ], [ ], [ ], [8], [7], [ ], [ ], [ ]],
      [[4], [9], [ ], [ ], [ ], [ ], [ ], [ ], [ ]],

    ]

    this.worldsHardest = [

      [[8], [ ], [ ], [ ], [ ], [ ], [ ], [ ], [ ]],
      [[ ], [ ], [3], [6], [ ], [ ], [ ], [ ], [ ]],
      [[ ], [7], [ ], [ ], [9], [ ], [2], [ ], [ ]],
      [[ ], [5], [ ], [ ], [ ], [7], [ ], [ ], [ ]],
      [[ ], [ ], [ ], [ ], [4], [5], [7], [ ], [ ]],
      [[ ], [ ], [ ], [1], [ ], [ ], [ ], [3], [ ]],
      [[ ], [ ], [1], [ ], [ ], [ ], [ ], [6], [8]],
      [[ ], [ ], [8], [5], [ ], [ ], [ ], [1], [ ]],
      [[ ], [9], [ ], [ ], [ ], [ ], [4], [ ], [ ]],

    ]

    this.evil = [

      [[6], [ ], [ ], [2], [ ], [ ], [7], [ ], [ ]],
      [[ ], [ ], [1], [ ], [ ], [3], [ ], [ ], [ ]],
      [[ ], [9], [ ], [ ], [8], [ ], [ ], [ ], [2]],
      [[9], [ ], [ ], [7], [ ], [ ], [ ], [5], [ ]],
      [[ ], [ ], [4], [ ], [1], [ ], [6], [ ], [ ]],
      [[ ], [3], [ ], [ ], [ ], [6], [ ], [ ], [7]],
      [[4], [ ], [ ], [ ], [5], [ ], [ ], [7], [ ]],
      [[ ], [ ], [ ], [3], [ ], [ ], [9], [ ], [ ]],
      [[ ], [ ], [8], [ ], [ ], [4], [ ], [ ], [1]],

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

    this.testGrid = this.evil
    this.grid = new Grid(this.testGrid)
    this.mainView.update(this.grid.grid)
    var goNow = setTimeout(this.go.bind(this), 2000)
  }

  go(){
    this.grid.buildPossibles()
    this.completeCheck()
  }

  checkRows(){
    console.log("Checking rows...")
    this.check.rows(this.grid)
    this.grid.checkAllSquares()
    this.mainView.update(this.grid.grid)
    this.grid.printGrid()
  }

  checkColumns(){
    console.log("Checking columns...")
    this.check.columns(this.grid)
    this.grid.checkAllSquares()
    this.mainView.update(this.grid.grid)
    this.grid.printGrid()
  }

  check3x3s(){
    console.log("Checking 3x3s...")
    this.check.threeXthrees(this.grid)
    this.grid.checkAllSquares()
    this.mainView.update(this.grid.grid)
    this.grid.printGrid()
  }

  checkIntersects(){
    console.log("checking for constrained possibilities in intersected 3x3s")
    this.checkIntersecting3x3.initiate(this.grid)
    this.grid.checkAllSquares()

    this.grid.printGrid()
    this.mainView.update(this.grid.grid)
  }

  allChecks(){
    var rows = setTimeout(this.checkRows.bind(this), this.timeUnit*5)
    var cols = setTimeout(this.checkColumns.bind(this), this.timeUnit*10)
    var threes = setTimeout(this.check3x3s.bind(this), this.timeUnit*15)
    var intersects = setTimeout(this.checkIntersects.bind(this), this.timeUnit*20)
    var complete = setTimeout(this.completeCheck.bind(this), this.timeUnit*20)
  }

  completeCheck(){
    this.grid.checkAllSquares()

    if (this.grid.checkAllSquares() === 81){
      console.log("game complete in", this.rounds, "rounds of checks")
    } else {
      console.log("round", this.rounds+1)
      if (this.lastCheckedValue === this.grid.countAllPossibles()){
        console.log("I can't solve this. Make me better!")
        this.mainView.update(this.grid.grid)
      } else {
        this.rounds += 1
        this.lastCheckedValue = this.grid.countAllPossibles()
        var nextRound = setTimeout(this.allChecks.bind(this), 0)
      }
    }
  }
}

module.exports = Main
