var React = require('react');

var CamperList = require('CamperList');
var Camper = require('Camper');
var LeaderboardAPI = require('LeaderboardAPI');

var Leaderboard = React.createClass({
  render: function(){
    var arrayOfCampers = LeaderboardAPI.getCampers();

    return(
      <div>
        <h1>FCC Leaderboard</h1>
        <CamperList campers = {arrayOfCampers}/>
      </div>
    );
  }
});

module.exports = Leaderboard;
