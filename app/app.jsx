var React = require('react');
var ReactDOM = require('react-dom');

var Leaderboard = require('Leaderboard');
import 'bootstrap/dist/css/bootstrap.min.css';



//App css
require('sass!applicationStyles')

ReactDOM.render(
<Leaderboard/>,
  document.getElementById('app')
);
