class Square {

  constructor(data){
    this.possibles = [false, false, false, false, false, false, false, false, false]
    if(data && data.value){
      this.value = data.value
    }
    if(data && data.possibles){
      this.possibles = data.possibles
    }
    // console.log(this.possibles)
  }

  setPossibles(data){
    this.possibles = [true, true, true, true, true, true, true, true, true]
    if(data && data.value){
      this.possibles = [false, false, false, false, false, false, false, false, false]
      this.possibles.forEach((possible, index) => {
        if (this.value-1 === index ){
          this.possibles[index] = true
        }
      })
    }
  }

  listRemainingPossibilities() {
    let possiblitiesList = []
    this.possibles.forEach((possible, index) => {
      if (possible === true) {
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
      return true
    } else {
      return false
    }

  }

  markOff(value){
    this.possibles[value-1] = false
  }

  setValueFromPossible(index){
    this.value = index+1
    this.possibles.forEach((possible, index) => {
      if(index !== this.value -1){
        this.possibles[index] = false
      }
    })
  }
}

module.exports = Square
