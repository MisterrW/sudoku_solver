var React = require('react');
var ReactDOM = require('react-dom');
var RowView = require('./rowView.jsx')


class GridView extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const rows = []
    this.props.grid.forEach((row, index) => {
        rows.push(<RowView key={index} row={row}></RowView>)
      })

    return <div className='grid-view' >
      {rows}

    </div>
  }
}

module.exports = GridView
