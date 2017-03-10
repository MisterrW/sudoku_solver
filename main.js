var Grid = require('./model/grid.js')

class Main {

  constructor(){

    console.log("in main constructor")
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

    // console.log(this.grid.grid[1][5])

    this.grid.grid[1][7].checkIfValueFound()
  }
}

module.exports = Main
