var React = require('react');
var ReactDOM = require('react-dom');
var GridView = require('./gridView.jsx')

class MainView {
  update(grid){
    ReactDOM.render(

      <GridView grid={grid}/>,
      document.getElementById('app')
    );
  }
}

module.exports = MainView
