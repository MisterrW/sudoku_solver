var React = require('react');
var ReactDOM = require('react-dom');

class SquareView extends React.Component{
  constructor(props){
    super(props)
    console.log(props.square)
  }
  render(){

    return (
      <div className='square-view'>
        { this.props.square.value? <div>{this.props.square.value}</div> : null }
      </div>
    )
  }
}

module.exports = SquareView
