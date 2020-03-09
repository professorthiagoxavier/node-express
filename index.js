const express = require("express");
const app = express();
var mysql = require('mysql');
const handlebars = require('express-handlebars');
const bodyParse =  require('body-parser');

//Config
//Template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());

//Database connection string
var db = mysql.createConnection({
  host: "db4free.net",
  user: "adminlojauninove",
  password: "uninove10",
  database: "conexaoloja"
});


//Connection to database
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to Database!");
});

//criar a rota principal da app
app.get("/", function(req,res){
     //variável dirname define o diretório padrão
     //res.sendFile(__dirname + "/Paginas/index.html");
     res.render('principal');
});

app.get("/produto", function(req, res){
    res.render('produto');//renderiza a tela de produto
});

app.get("/cadProduto",function(req, res){
   res.render("cadProduto");
});


app.post("/adicionarproduto", function(req, res){
   //utilizando o bodyParse
   var email = req.body.email;

  res.send("Email recebido: " + email);
});

//Criar rota de cadastro

//Passagem de parametro
//:nome
app.get("/welcome/:nome",function(req,res){
   res.send("Ola, bro "+ req.params.nome);
})

//precisa ser a última linha do código;
app.listen(8081,function(){
//executar uma função de callback
console.log("Rodando...");

}); //executar o servidor