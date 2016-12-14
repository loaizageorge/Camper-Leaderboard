var React = require('react');
var Camper = require('Camper');

var uuid = require('node-uuid'); // Used to create unique IDs for each camper component

var CamperList = React.createClass({
  render: function(){
    var campers = this.props.campers;
    var renderCampers = () =>{
      if(campers.length === 0 || campers === undefined){
        return(
          <tr>
          <td>1</td>
          <td className = "camper_username"><img src ="https://avatars.githubusercontent.com/u/4639625?v=3"/>xchendo</td>
          <td className = "camper_alltime">999</td>
          </tr>
        )
      } else {
        var position = 0;
      return campers.map((camper) =>{
        position++;
      return(
          <Camper key = {uuid()} position = {position} {...camper}   />
      )
      });
    };
}
    return(
      <div className = "table-responsive camper-table">
        <table className = "table table-striped table-condensed">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>All time points</th>
            </tr>
          </thead>
        <tbody>
        {renderCampers()}
        </tbody>
      </table>
      </div>
    );
  }
});

module.exports = CamperList;
