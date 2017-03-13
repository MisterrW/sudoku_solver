var React = require('react');
var ReactDOM = require('react-dom');
var SquareView = require('./squareView.jsx')

class RowView extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const squares = []
    this.props.row.forEach((square) => {
        squares.push(<SquareView square={square}></SquareView>)
      })

    return <div className="row-view">
      {squares}

    </div>
  }
}

module.exports = RowView
