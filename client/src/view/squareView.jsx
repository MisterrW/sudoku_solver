var React = require('react');
var ReactDOM = require('react-dom');

class SquareView extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let printPossibilitiesString=""
    if(! this.props.square.value){
      let printPossibilities = []

      this.props.square.possibles.forEach((possible, index) => {
        if (possible === true) {
          printPossibilities.push(index + 1)
        }
      })
      printPossibilitiesString = printPossibilities.join(", ")
    }

    return (
      <div className='square-view'>
        <div style={{fontSize: "10px", color: "red"}}>{printPossibilitiesString}</div>
        { this.props.square.value? <div>{this.props.square.value}</div> : null }
      </div>
    )
  }
}

module.exports = SquareView
