const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

const conn = mysql.createConnection({

  host:'localhost',
  user:'root',
  password:'mysql',
  database:'filemanagement',

});

const server = app.listen(4545, function(){
  const host = server.address().address
  const port = server.address().port
});

conn.connect(function(error){
 if(error){
    console.log(error);
 } else{
    console.log("connected");
 }
});

app.get('/accounts', function(req, res){
  conn.query('select * from accounts', function(error, rows, fields){
    if(error){
      console.log(error);
    }else{
      console.log(rows);
      res.send(rows);
    }
  });
});

app.post('/acc', (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;
  const fName = req.body.fName;
  const lName = req.body.lName;

  conn.query('INSERT INTO `accounts` (id, username, password, f_name, l_name) VALUES (?, ?, ?, ?, ?)', 
  [null, user, pass, fName, lName], (err, result) => {
      if(err) {
        console.log(err)
      } else {
        res.send("Values Inserted");
      }
    }
  )
});