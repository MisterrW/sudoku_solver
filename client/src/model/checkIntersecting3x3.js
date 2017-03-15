var Check = require('./check.js')

class CheckIntersecting3x3{
  constructor(){
    this.check = new Check()
  }

  initiate(gridObj){
    this.gridObj = gridObj
    this.grid = gridObj.grid
    this.threeXThrees = this.check.getThreeXThrees(gridObj)
    // this.grid.forEach((row) => {
    //   row.forEach((square) => {
    //     if (!square.value){
    //       this.checkAllAgainst(square)
    //     }
    //   })
    // })
    this.checkAllAgainst(this.grid[7][7])
  }

  checkAllAgainst(square){
    // console.log(this.threeXThrees)
    // this.checkRowDoesIntersect(square)
    this.checkColumnDoesIntersect(square)

  }

  checkRowDoesIntersect(square){
    //get row
    let row = []
    this.grid.forEach((row2) => {
      row2.forEach((square2) => {
        if(square === square2){
          row = row2
        }
      })
    })
    // console.log("row: ", row)
    this.findIntersecting3x3s(row, square)
  }

  checkColumnDoesIntersect(square){
    //get column
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
    console.log("col: ", col)
    this.findIntersecting3x3s(col, square)
  }

  findIntersecting3x3s(straight, square){
    // console.log("straight:", straight)
    let intersecting3x3s = []
    this.threeXThrees.forEach((threeXThree) => {
      if (this.check3x3DoesIntersectAndDoesNotContainCheckingSquare(threeXThree, straight, square)){
        intersecting3x3s.push(threeXThree)
      }
    })
    console.log("intersecting3x3s:")
    console.log(intersecting3x3s)

    if(intersecting3x3s.length !== 2){
      // console.log("should always be 9:", straight.length)
      // console.log(intersecting3x3s)
    }

    intersecting3x3s.forEach((threeXThree) => {
      this.checkPossibilitiesAgainst(threeXThree, straight, square)
    })

  }

  check3x3DoesIntersectAndDoesNotContainCheckingSquare(threeXThree, straight, squareBeingChecked){
    let intersects = false
    let doesNotContainsquareBeingChecked = true
    //check intersection
    threeXThree.forEach((squareIn3x3) => {
      straight.forEach((squareInStraight) => {
        if(squareIn3x3 === squareInStraight){
          intersects = true
        }
      })
    })
    //check does not contain square being checked
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
        console.log("hello")
        console.log("contains value in axis?", this.check3x3ContainsValueInAxis(threeXThree, straight, index))
        let mustBeTrue1 = this.check3x3ContainsValueInAxis(threeXThree, straight, index)
        let mustBeTrue2 = this.check3x3DoesNotContainValueOffAxis(threeXThree, straight, index)

        if(mustBeTrue1){
          console.log("one down...")
          if(mustBeTrue2){
            console.log("Got one!")
            console.log(index+1)
            this.markOff(squareBeingChecked, index)
          }
        }
      }
    })
  }

  markOff(square, index){
    this.gridObj.forEach((row) => {
      row.forEach((squareToMark) => {
        if (squareToMark === square){
          squareToMark.markOff(index+1)
        }
      })
    })
  }

  check3x3ContainsValueInAxis(threeXThree, straight, possibleIndex){
    console.log(threeXThree, straight, possibleIndex)
    console.log(straight[0].possibles)
    threeXThree.forEach((square1) => {
      straight.forEach((square2) => {
        if(square1 === square2){
          console.log("match")
          console.log(square1)
          if(square1.possibles[possibleIndex]){
            console.log("yes")
            return true
          } else {
            console.log("no")
          }
        }
      })
    })
  }

  check3x3DoesNotContainValueOffAxis(threeXThree, straight, possibleIndex){
    let newTest3x3 = []
    threeXThree.forEach((square) => {
      newTest3x3.push(square)
    })
    newTest3x3.forEach((square1, index) => {
      straight.forEach((square2) => {
        if(square1 === square2){
          newTest3x3.splice(index, 1)
        }
      })
    })

    // console.log("threeX3 with 3 elements removed due to intersect", newTest3x3)

    newTest3x3.forEach((square1) => {
      if(square1.possibles[possibleIndex]){
        return false
      }
    })
    return true
  }
}

module.exports = CheckIntersecting3x3
