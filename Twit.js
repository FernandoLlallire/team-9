var Twit = require('twit');

var T = new Twit({
  consumer_key : '...',
  consumer_secret: '...',
  access_token: '...',
  access_token_secret: '...',
  timeout_ms: 60*1000,
  strictSSL:   true,
  })
  
  //hacemos el tweet 
  
 T.post('statuses/update', { status: 'seleccionamos las mujeres  mas influyentes en Ciencias en Mayo. Pegate la vuelta!' }, function(err, data, response) {
  console.log(data)
})
  
