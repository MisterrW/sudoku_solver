var assert = require('assert')
var Grid = require('../model/grid')
var Check = require('../model/check')
var BuildTestSudokuUnit = require('./buildTestSudokuUnit')

describe("check", function(){
  let grid
  let check
  let buildTestSudokuUnit

  beforeEach(function(){
    // grid = new Grid()
    check = new Check()
    buildTestSudokuUnit = new BuildTestSudokuUnit()
  })

  it("can mark off a square's possibles for values already taken in that unit", function(){
    console.log(buildTestSudokuUnit)
    let unit = buildTestSudokuUnit.makeUnit([1,2,3,"-","-","-",7,8,9])
    console.log(unit)
  })

  it("can set value when possiblity is exclusive to one square in unit", function(){
    let unit = buildTestSudokuUnit.makeUnit([3, 5, 1, 9, "-", 8, "-", "-", 6])
    unit[4].possibles = [ false, false, false, true, false, false, true, false, false ]
    unit[6].possibles = [ false, true, false, true, false, false, false, false, false ]
    unit[7].possibles = [ false, true, false, true, false, false, false, false, false ]
    console.log(unit[4].possibles)
    console.log(unit[6].possibles)
    console.log(unit[7].possibles)
    check.unitCheckExclusivePossible(unit)
    console.log("value (should be 7):", unit[4].value)
    console.log("possibles (should only be index 6):", unit[4].possibles)
  })



})
