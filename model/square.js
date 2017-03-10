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
    console.log(this.possibles)
  }

  checkIfValueFound(){
    const possiblesLeft = []
    this.possibles.forEach((possible, index) => {
      if (possible === true) {
        possiblesLeft.push(index)
      }
    })
    if (possiblesLeft.length === 1) {
      this.value = possiblesLeft[0]
    }
  }

}

module.exports = Square
