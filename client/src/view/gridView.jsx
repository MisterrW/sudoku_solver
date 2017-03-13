var React = require('react');
var ReactDOM = require('react-dom');
var RowView = require('./rowView.jsx')


class GridView extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const rows = []
    this.props.grid.forEach((row) => {
        rows.push(<RowView row={row}></RowView>)
      })

    return <div className='grid-view' >
      {rows}

    </div>
  }
}

module.exports = GridView
