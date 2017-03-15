var Check = require('./check.js')
var Square = require('./square.js')

class CheckIntersecting3x3{
  constructor(){
    this.check = new Check()
  }

  initiate(gridObj){
    this.gridObj = gridObj
    this.grid = gridObj.grid
    this.threeXThrees = this.check.getThreeXThrees(gridObj)
    this.grid.forEach((row) => {
      row.forEach((square) => {
        if (!square.value){
          this.checkAllAgainst(square)
        }
      })
    })
  }

  checkAllAgainst(square){
    this.checkRowDoesIntersect(square)
    this.checkColumnDoesIntersect(square)
  }

  checkRowDoesIntersect(square){
    let row = []
    this.grid.forEach((row2) => {
      row2.forEach((square2) => {
        if(square === square2){
          row = row2
        }
      })
    })
    this.findIntersecting3x3s(row, square)
  }

  checkColumnDoesIntersect(square){
    let col = []
    this.grid.forEach((row) => {
      row.forEach((square2, index) => {
        if(square === square2){
          this.grid.forEach((row) => {
            col.push(row[index])
          })
        }
      })
    })
    this.findIntersecting3x3s(col, square)
  }

  findIntersecting3x3s(straight, square){
    let intersecting3x3s = []
    this.threeXThrees.forEach((threeXThree) => {
        if (this.check3x3DoesIntersectAndDoesNotContainCheckingSquare(threeXThree, straight, square)){
          intersecting3x3s.push(threeXThree)
        }
    })

    intersecting3x3s.forEach((threeXThree) => {
      this.checkPossibilitiesAgainst(threeXThree, straight, square)
    })

  }

  check3x3DoesIntersectAndDoesNotContainCheckingSquare(threeXThree, straight, squareBeingChecked){
    let intersects = false
    let doesNotContainsquareBeingChecked = true
    threeXThree.forEach((squareIn3x3) => {
      straight.forEach((squareInStraight) => {
        if(squareIn3x3 === squareInStraight){
          intersects = true
        }
      })
    })
    threeXThree.forEach((squareIn3x3) => {
      if(squareIn3x3 === squareBeingChecked){
        doesNotContainsquareBeingChecked = false
      }
    })

    if(intersects === true){
      if(doesNotContainsquareBeingChecked === true){
        return true
      }
    }
    return false
  }

  checkPossibilitiesAgainst(threeXThree, straight, squareBeingChecked){
    squareBeingChecked.possibles.forEach((possible, index) => {
      if(possible){
        this.check3x3ContainsValueInAxis(threeXThree, straight, index, squareBeingChecked)
      }
    })
  }

  markOff(square, index){
    this.gridObj.grid.forEach((row) => {
      row.forEach((squareToMark) => {
        if (squareToMark === square){
          squareToMark.markOff(index+1)
        }
      })
    })
  }

  check3x3ContainsValueInAxis(threeXThree, straight, possibleIndex, squareBeingChecked){
    threeXThree.forEach((square1) => {
      straight.forEach((square2) => {
        if(square1 === square2){
          if(square1.possibles[possibleIndex]){
            this.check3x3DoesNotContainValueOffAxis(threeXThree, straight, possibleIndex, squareBeingChecked)
          } else {
          }
        }
      })
    })
  }

  check3x3DoesNotContainValueOffAxis(threeXThree, straight, possibleIndex, squareBeingChecked){
    let newTest3x3 = []
    let valid = true
    threeXThree.forEach((square, index) => {
      newTest3x3[index] = new Square({possibles: square.possibles})
    })

    threeXThree.forEach((square1, index) => {
      straight.forEach((square2) => {
        if(square1 === square2){

          newTest3x3[index].possibles = [false, false, false, false, false, false, false, false, false]
        }
      })
    })

    newTest3x3.forEach((square1) => {
      if(square1.possibles[possibleIndex] === true){
        valid = false
      }
    })

    if (valid === true){
      console.log("Got one!")
      console.log(possibleIndex+1)
      this.markOff(squareBeingChecked, possibleIndex)
    }
  }
}

module.exports = CheckIntersecting3x3
