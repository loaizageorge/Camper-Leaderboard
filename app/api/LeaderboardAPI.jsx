var axios = require('axios');
var $ = require('jquery');

module.exports = {
  getCampers: function(){
    const URL = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    var arrayOfCampers = [];

    axios.get(URL)
    .then((response) =>{
    console.log('I get here');

    }).catch((error) =>{
        console.log(error);
    });
  }
}
/* var arrayOfCampers = [
  {
    id: 0,
    username: 'sjames1958gm',
    img: 'https://avatars.githubusercontent.com/u/4639625?v=3',
    alltime: '4531'
  },
  {
    id: 1,
    username: 'camperbot',
    img: 'https://avatars.githubusercontent.com/u/13561988?v=3',
    alltime: '2693'
  },
  {
    id: 2,
    username: 'Rafase282',
    img: 'https://avatars.githubusercontent.com/u/285138?v=3',
    alltime: '1038'
  }
];
return arrayOfCampers;*/
