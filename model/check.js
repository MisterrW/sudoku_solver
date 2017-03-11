class Check{
  constructor(){
  }

  rows(grid){
    grid.grid.forEach((row) => {
      this.unitMarkOff(row)
    })
  }

  columns(grid){
    for(var c = 0; c < grid.grid.length; c++){
      let column = []
      grid.grid.forEach((row) => {
        column.push(row[c])
      })
      this.unitMarkOff(column)
    }
  }

  threeXthrees(grid){
    const starts = [0, 3, 6]
    starts.forEach((colStart) => {
      starts.forEach((rowStart) => {
        let threeXThree = []
        for (var i=0; i<=2; i++){
          for (var j=0; j<=2; j++){
            threeXThree.push(grid.grid[colStart+i][rowStart+j])
          }
        }
        this.unitMarkOff(threeXThree)
      })
    })
  }

  unitMarkOff(unit){
    unit.forEach((squareCheckingAgainst) => {
      if (squareCheckingAgainst.value){
        unit.forEach((square) => {
          if (! square.value) {
            square.markOff(squareCheckingAgainst.value)
          }
        })
      }
    })
  }

}

module.exports = Check
