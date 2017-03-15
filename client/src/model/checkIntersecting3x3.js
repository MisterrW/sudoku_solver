var Check = require('./check.js')

class CheckIntersecting3x3{
  constructor(){
    this.check = new Check()
  }

  initiate(gridObj){
    this.grid = gridObj.grid
    this.threeXThrees = this.check.getThreeXThrees(gridObj)
    // this.grid.forEach((row) => {
    //   row.forEach((square) => {
    //     if (!square.value){
    //       this.checkAllAgainst(square)
    //     }
    //   })
    // })
    this.checkAllAgainst(this.grid[0][0])
  }

  checkAllAgainst(square){
    console.log(square)
    console.log(this.threeXThrees)
    this.checkRowDoesIntersect(square)
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
    console.log("row: ")
    console.log(row)
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
    console.log("col: ")
    console.log(col)
  }

  findIntersecting3x3s(straight, square){
    let intersecting3x3s = []
    this.threeXThrees.forEach((threeXThree) => {
      if (this.check3x3DoesIntersectAndDoesNotContainCheckingSquare(threeXThree, straight, square)){
        intersecting3x3s.push(threeXThree)
      }
    })
    console.log("intersecting3x3s:")
    console.log(intersecting3x3s)
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
    //check does not contain square being checkIfValueFound
    threeXThree.forEach((squareIn3x3) => {
      if(squareIn3x3 === squareBeingChecked){
        doesNotContainsquareBeingChecked = false
      }
    })

    return intersects && doesNotContainsquareBeingChecked ? true : false
  }

  // check3x3DoesIntersect(straight, squareToPass){
  //   let intersects = false
  //   threeXThree.forEach((squareIn3x3) => {
  //     //getting coords of threeXThree squares
  //     grid.forEach((row, rowIndex) => {
  //       row.forEach((square2, colIndex) => {
  //         if(square2 == squareIn3x3){
  //           console.log("square identified in 3x3 at ", colIndex, rowIndex)
  //           console.log(square2)
  //         }
  //       })
  //     })
  //   })
  // }

  check3x3DoesNotContainSquare(){

  }

  check3x3ContainsValueInAxis(){

  }

  check3x3DoesNotContainValueOffAxis(){

  }
}

module.exports = CheckIntersecting3x3
