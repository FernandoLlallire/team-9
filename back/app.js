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

var cors = require('cors');
app.use(cors());

app.get('/', function(req, res) {
  res.send("Hello world!");
});

app.post('/api/addCandidate', function(req, res) {
  /*connection.query('SELECT * FROM Postulado', (err,rows) => {
    if(err) throw err;

    console.log('Data received from Db:\n');
    rows.forEach( (row) => {
      console.log(`${row.nombre} y su apellido ${row.apellido}`);
    res.send(row.nombre+row.apellido)
    asd();
    });
  });  
*/

  if(insertPostulado(req.body.candidate)){
    res.send("ok")
  }
  
  else{
    res.send("wrong")
  }


});


function insertPostulado(postulado){
  console.log(postulado);
 query = "CALL addCandidate(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
 connection.query(query,[postulado.nombre,postulado.apellido,postulado.edad,postulado.campo,postulado.provincia,postulado.motivo_post,postulado.extracto,postulado.foto,postulado.video,
   postulado.audio,postulado.email,postulado.mail_tercero,postulado.telefono,postulado.telefono_tercero],function(err,rows){
       if(err){ console.log(err); return false;}
       console.log(rows);
       console.log("add postulado ok");
       return true;
   });
}


app.get('/api/getWinners', function(req, res) {
  console.log("getwinners")
  getWinners(res)


});

function getWinners(res){
  query = "SELECT * FROM Postulado p join Aceptado a on p.id=a.id_postulado"
  sequelize.query(query, { type: sequelize.QueryTypes.SELECT})
  .then(row => {
    console.log("ASD" + JSON.stringify(row))
    res.send(JSON.stringify(row))
  })
}

app.post('/api/setWinners', function(req, res) {
  console.log("SETSELEEE")
  if(setWinners(req.body)){
    res.send("ok")
  }
  
  else{
    res.send("wrong")
  }


});
function setWinners(ids){
  
  ids.forEach(function(id){
    q="call addSelectedCandidate(?,?) "
    connection.query(q,[id,""],function(err,rows){
          if(err){ console.log(err); return false;}
          console.log(rows);
          console.log("add selected cand ok");
          return true;
      });
  });
}

app.get('/api/getCandidate', function(req, res) {
  console.log("getCandidate")
  console.log(req.body)
  getCandidate(req.body,res)


});

function getCandidate(id,res){ 
  data = []
  query = "SELECT * FROM Postulado where id="+id.id
  sequelize.query(query, { type: sequelize.QueryTypes.SELECT})
  .then(row => {
    console.log("ASD" + JSON.stringify(row))
    res.send(JSON.stringify(row))
  })
  console.log("length" + data.length)
   
}

//routes = require('./routes/tvshow')(app);

function asd(){
  console.log("ASD");
}


app.get('/api/getAllCandidates', function(req, res) {
  //d = getAllCandidates(res)
  
  getAll2(res)
//res.send("ASD")
  


});




function getAll2(res){
  
  data = []
  sequelize.query("SELECT * FROM `Postulado`", { type: sequelize.QueryTypes.SELECT})
  .then(row => {
    console.log("ASD" + JSON.stringify(row))
    res.send(JSON.stringify(row))
  })
  console.log("length" + data.length)

}


function getAllCandidates(res){

  connection.query('SELECT * FROM Postulado', (err,rows) => {
    if(err) throw err;
    data = []
    console.log('Data received from Db:\n');
    rows.forEach( (row) => {
      
      p = new Object()
      p.apellido=row.apellido
      p.nombre=row.nombre
      p.edad=row.edad
      p.campo=row.campo
      p.provincia=row.provincia
      p.motivo_post=row.motivo_post
      p.extracto=row.extracto
      p.foto=row.foto
      p.video=row.video
      p.audio=row.audio
      p.email=row.email
      p.mail_tercero=row.mail_tercero
      p.telefono=row.telefono
      p.telefono_tercero=row.telefono_tercero
      data.push(p)
      console.log(p)
      console.log(`${row.nombre} y su apellido ${row.apellido} y ${row}`);
    //res.send(row.nombre+row.apellido)
    //asd();
    //return data
    console.log("send d")
    res.send((d))
  });
    //console.log("DATAAAAAAAAAA   " +data[0].nombre)
    
    
  })

}





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



server.listen(3001, function() {
  console.log("Node server running on http://localhost:3001");
});