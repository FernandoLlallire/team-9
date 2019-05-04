var Twit = require('twit');

var config = require('./twitterConfig.json');

console.log(config);

var T = new Twit(config);


  
  //hacemos el tweet 
  
 T.post('statuses/update', { status: 'test las mujeres  mas influyentes en Ciencias en Mayo. Pegate la vuelta!' }, function(err, data, response) {
  console.log(data)
})
  
