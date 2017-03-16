var React = require('react');
var ReactDOM = require('react-dom');

class SquareView extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let printPossibilities = []
    if(! this.props.square.value){
      this.props.square.possibles.forEach((possible, index) => {
        if (possible === true) {
          printPossibilities.push(<div className="possible-view" key={index+1}>{index + 1}</div>)
        } else {
          printPossibilities.push(<div className="possible-view" key={index+1}></div>)
        }
      })
    }

    return (
      <div>

        { this.props.square.value? <div className='square-view'>{this.props.square.value}</div>
        :
        (<div className='square-view'>
          {printPossibilities}
        </div>) }
      </div>
    )
  }
}

module.exports = SquareView
