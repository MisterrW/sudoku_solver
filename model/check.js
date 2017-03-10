class Check{
  constructor(){

  }

  rows(grid){
    for(var r = 0; r < grid.grid.length; r++){
      for(var c = 0; c < grid.grid.length; c++) {
        var checking = grid.grid[r][c]

        if(checking.value){
          for(var c2 = 0; c2 < grid.grid.length; c2++) {
            if (! grid.grid[r][c2].value) {
              grid.grid[r][c2].markOff(checking.value)
            }
          }
        }

      }
    }

  }


  columns(grid){
    for(var r = 0; r < grid.grid.length; r++){
      for(var c = 0; c < grid.grid.length; c++) {
        var checking = grid.grid[r][c]

        if(checking.value){
          for(var r2 = 0; r2 < grid.grid.length; r2++) {
            if (! grid.grid[r2][c].value) {
              grid.grid[r2][c].markOff(checking.value)
            }
          }
        }

      }
    }

  }

  threeXthrees(grid){
    const allThreeXThrees = []
    const starts = [0, 3, 6]
    starts.forEach((colStart) => {
      starts.forEach((rowStart) => {
        // console.log(grid.grid[colStart][rowStart].value)
        let thisThreeXThree = []
        for (var i=0; i<=2; i++){
          for (var j=0; j<=2; j++){
            thisThreeXThree.push(grid.grid[colStart+i][rowStart+j])
          }
        }
        allThreeXThrees.push(thisThreeXThree)
      })
    })
    allThreeXThrees.forEach((threeXThree) => {
      threeXThree.forEach((squareCheckingAgainst) => {
        if (squareCheckingAgainst.value){
          threeXThree.forEach((square) => {
            if (! square.value) {
              square.markOff(squareCheckingAgainst.value)
            }
          })

        }
        // console.log(square.value)
      })

    })
  }

}

module.exports = Check
