var React = require('react');

var CamperList = require('CamperList');
var Camper = require('Camper');

var Leaderboard = React.createClass({
  render: function(){
    return(
      <div>
        <h1>FCC Leaderboard</h1>
        <CamperList/>
        <Camper/>
      </div>
    );
  }
});

module.exports = Leaderboard;
