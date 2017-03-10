class Square {

  constructor(data){
    this.possibles = [true, true, true, true, true, true, true, true, true]
    if(data.value){
      this.value = data.value
      this.possibles.forEach((possible, index) => {
        console.log("index in possibles: ", index)
        console.log("this value: ", this.value)
        if (!this.value === index ){
          possible = false
        }
      })
      console.log(this.possibles)
    }
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
