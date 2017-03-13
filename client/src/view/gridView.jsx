var React = require('react');
var ReactDOM = require('react-dom');
var RowView = require('./rowView.jsx')


class GridView extends React.Component{
  constructor(props){
    super(props)
    console.log("in gridView constructor")
    console.log(props.grid[0])
  }
  render(){
    const rows = []
    this.props.grid.forEach((row) => {
        console.log("row")
        rows.push(<RowView row={row}></RowView>)
      })

    return <div className='grid-view' >
      {rows}

    </div>
  }
}

module.exports = GridView
