class Square {

  constructor(data){
    this.possibles = [true, true, true, true, true, true, true, true, true]
    if(data.value){
      this.value = data.value
      this.possibles = [false, false, false, false, false, false, false, false, false]
      this.possibles.forEach((possible, index) => {
        if (this.value-1 === index ){
          this.possibles[index] = true
        }
      })
    }
    // console.log(this.possibles)
  }

  listRemainingPossibilities() {
    let possiblitiesList = []
    this.possibles.forEach((possibile, index) => {
      if (possibile === true) {
        possiblitiesList.push(index+1)
      }
    })
    let possiblitiesString = possiblitiesList.join(", ")
    return possiblitiesString
  }

  checkIfValueFound(){
    const possiblesLeft = []
    this.possibles.forEach((possible, index) => {
      if (possible === true) {
        possiblesLeft.push(index+1)
      }
    })
    if (possiblesLeft.length === 1) {
      this.value = possiblesLeft[0]
      // console.log("Value found! value is ", this.value)
    } else {
      // console.log("Value not found yet. Remaining possibilites: ", this.listRemainingPossibilities())
    }

  }



  markOff(value){
    this.possibles[value-1] = false
  }

}

module.exports = Square
