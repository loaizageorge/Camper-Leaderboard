var React = require('react');
var Camper = require('Camper');

var CamperList = React.createClass({
  render: function(){
    var campers = this.props.campers;
    
    var renderCampers = () =>{
      return campers.map((camper) =>{

      return(
          <Camper key = {camper.id} {...camper} />
      )
      });
    };

    return(
      <div>
        {renderCampers()}
      </div>
    );
  }
});

module.exports = CamperList;
