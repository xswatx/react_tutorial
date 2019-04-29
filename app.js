var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors =require('cors');
app.use(bodyParser.urlencoded({extended:false}));
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs"
  });


app.get('/api/get',cors(),function(req,res) {
    con.connect((err)=>{
        if (err){
            console.log('request err!')
        }
        console.log("Connected!");
        var sql = "select name from member where id=1";
        con.query(sql,function (err, result) {
            if (err){
                console.log('request err!')
            }
            console.log(result[0].name);
          res.send({result:result[0].name});
        });
    })
});


app.post('/api/post', cors(),function(req, res){

    con.connect((err)=>{
        if (err){
            console.log('request err!')
        }
        var sql = "select name from member where id=1";
        con.query(sql,function (err, result) {
            if (err){
                console.log('request err!')
            }
            console.log(result[0].name);
          res.send({result:result[0].name});
        });
    })
});




app.listen(4300, function(){
    console.log('connected 4300 port');
});
