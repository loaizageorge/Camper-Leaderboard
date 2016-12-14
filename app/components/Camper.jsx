var React = require('react');

var Camper = React.createClass({
  render: function(){

    var {id,username,img,alltime,recent,rank} = this.props;
    var URL = "www.freecodecamp.com/" + username;
    return(
        <tr>
        <td className = "camper_rank">{rank}</td>
        <td className = "camper_username"><img className = "img-rounded" src = {img}/><a href= {URL} target = "_blank">{username}</a></td>
        <td className = "camper_recent">{recent}</td>
        <td className = "camper_alltime">{alltime}</td>
        </tr>

    );
  }
});

module.exports = Camper;
