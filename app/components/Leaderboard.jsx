var React = require('react');

var CamperList = require('CamperList');
var Camper = require('Camper');
var LeaderboardAPI = require('LeaderboardAPI');

var uuid = require('node-uuid');
var axios = require('axios');

var Leaderboard = React.createClass({
  getInitialState: function(){
    return {
      arrayOfCampers: []
    }
  },

  /*

  */
  componentWillMount: function (){
    const URL = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";

    axios.get(URL)
    .then((response) =>{

      this.setState({
        arrayOfCampers: response.data
      });

    }).catch((error) =>{
        console.log(error);
    });

  },
  render: function(){

    var arrayOfCampers = this.state.arrayOfCampers;

    return(
      <div>
        <h1>FCC Leaderboard</h1>
        <CamperList campers = {arrayOfCampers}/>
      </div>
    );
  }
});

module.exports = Leaderboard;
