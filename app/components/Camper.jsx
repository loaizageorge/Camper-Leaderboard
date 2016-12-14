var React = require('react');

var Camper = React.createClass({
  render: function(){

    var {id,username,img,alltime,position} = this.props;

    return(

        <tr>
        <td>{position}</td>  
        <td className = "camper_username"><img src = {img}/>{username}</td>
        <td className = "camper_alltime">{alltime}</td>
        </tr>

    );
  }
});

module.exports = Camper;
