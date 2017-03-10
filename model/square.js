export default class Square {

  constructor(data){
    this.possibles = [true, true, true, true, true, true, true, true, true]
    if(data.value){
      this.value = data.value
      possibles.forEachWithIndex((possible, index) => {
        if (! value === index ){
          possible = false
        }
      }
    }
  }

  checkIfValueFound(){
    const possiblesLeft = []
    this.possibles.forEachWithIndex((possible, index) => {
      if (possible === true) {
        possiblesLeft.push(index)
      }
    })
    if (possiblesLeft.length === 1) {
      this.value = possiblesLeft[0]
    }
  }



}
