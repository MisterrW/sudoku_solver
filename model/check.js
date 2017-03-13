class Check{
  constructor(){
  }

  rows(grid){
    grid.grid.forEach((row) => {
      this.unitMarkOff(row)
      this.unitCheckExclusivePossible(row)
    })
  }

  columns(grid){
    for(var c = 0; c < grid.grid.length; c++){
      let column = []
      grid.grid.forEach((row) => {
        column.push(row[c])
      })
      this.unitMarkOff(column)
      this.unitCheckExclusivePossible(column)
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
        if (rowStart = 0 && colStart == 3){
          console.log(grid.grid[rowStart][colStart])
        }
        this.unitMarkOff(threeXThree)
        this.unitCheckExclusivePossible(threeXThree)
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

  unitCheckExclusivePossible(unit){
    unit.forEach((square) => {
      if (! square.value){
        square.possibles.forEach((possible, index1) => {
          if(possible === true){
            let unique = true
            unit.forEach((otherSquare) => {
              if (square !== otherSquare){
                otherSquare.possibles.forEach((otherPossible, index2) => {
                  if(otherPossible === true){
                    if(index1 === index2){
                      unique = false
                    }
                  }
                })
              }
            })
            if(unique === true){
              console.log("one true index is", index1)
              square.setValueFromPossible(index1)
            }
          }
        })
      }
    })
  }

}

module.exports = Check
