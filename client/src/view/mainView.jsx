var React = require('react');
var ReactDOM = require('react-dom');
var GridView = require('./gridView.jsx')

class MainView {
  update(grid){
    console.log("in mainview update method")
    ReactDOM.render(

      <GridView grid={grid}/>,
      document.getElementById('app')
    );
  }
}

module.exports = MainView
