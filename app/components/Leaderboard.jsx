var React = require('react');

var CamperList = require('CamperList');
var Camper = require('Camper');

var uuid = require('node-uuid');
var axios = require('axios');

var Leaderboard = React.createClass({
  getInitialState: function(){
    return {
      arrayOfCampers: []
    }
  },

  componentWillMount: function (){
    this.handleToggle('alltime');
  },
  handleToggle: function(toggle){
    var URL = '';
    if(toggle === 'alltime'){
      console.log('Get all time');
      URL = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
    } else {
      console.log('Get recent');
      URL = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    }
    axios.get(URL)
    .then((response) =>{
      console.log('new set');
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
        <header>
        <img className = "logo" src = "https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg" alt= "FCC logo"/>
        </header>
        <CamperList campers = {arrayOfCampers} onToggle = {this.handleToggle}/>
      </div>
    );
  }
});

module.exports = Leaderboard;
