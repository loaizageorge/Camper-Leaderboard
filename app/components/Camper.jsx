var React = require('react');

var Camper = React.createClass({
  render: function(){

    var {id,username,img,alltime} = this.props;

    return(
      <div>
        <p>{username}</p>
        <img src = {img}/>
        <p>{alltime}</p>
      </div>
    );
  }
});

module.exports = Camper;
