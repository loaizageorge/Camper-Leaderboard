var React = require('react');
var Camper = require('Camper');


var uuid = require('node-uuid'); // Used to create unique IDs for each camper component

var CamperList = React.createClass({
  render: function(){
    var campers = this.props.campers;
    var renderCampers = () =>{
      console.log(campers);
      if(campers.length === 0 || campers === undefined){
        return(
        <p></p>
        )
      } else {
      return campers.map((camper) =>{

      return(
          <Camper key = {uuid()} {...camper} />
      )
      });
    };
}
    return(
      <div>
        {renderCampers()}
      </div>
    );
  }
});

module.exports = CamperList;
