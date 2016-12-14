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
          <td className = "camper_rank">0</td>
          <td className = "camper_username">Fetching data...</td>
          <td className = "camper_alltime">999</td>
          </tr>
        )
      } else {
        var rank = 0;
      return campers.map((camper) =>{
        rank++;
      return(
          <Camper key = {uuid()} rank = {rank} {...camper}   />
      )
      });
    };
}
    return(
      <div className = "table-responsive camper-table">
        <h2 className = "title">Leaderboard</h2>
        <table className = "table table-striped table-condensed table-hover">
          <thead>
            <tr>
              <th className = "th_rank">#</th>
              <th className = "th_username">Username</th>
              <th className = "th_recent">Points in past 30 days</th>
              <th className = "th_alltime">All time points</th>
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
