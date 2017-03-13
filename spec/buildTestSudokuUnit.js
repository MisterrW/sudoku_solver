var Square = require('../model/square')

class BuildTestSudokuUnit {

  makeUnit(unitArray){
    let unit = []
    console.log(unitArray)
    unitArray.forEach((value, index) => {
      console.log(value)
      if (value !== "-") {
        unit[index] = new Square({value: value})
      }
      else {
        unit[index] = new Square()
      }
    })
    return unit
  }

}

module.exports = BuildTestSudokuUnit
