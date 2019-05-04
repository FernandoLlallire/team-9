var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'); 

const mysql = require('mysql');
const Sequelize = require('sequelize')



const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function(req, res) {
  res.send("Hello world!");
});

routes = require('./routes/tvshow')(app);
routes = require('./routes/apiv1')(app);


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'martin',
  password: 'Qwerty123',
  database: 'codeForGood'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('mysql Connected!');
});

connection.query('SELECT * FROM Postulado', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:\n');
  rows.forEach( (row) => {
    console.log(`${row.nombre} y su apellido ${row.apellido}`);
  });
});

const sequelize = new Sequelize('codeForGood', 'martin', 'Qwerty123', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize.authenticate()
  .then(() => {
    console.log('sequelize Conectado')
  })
  .catch(err => {
    console.log('sequelize No se conecto')
  })


/*mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
  useNewUrlParser: true;
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});
*/
server.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});