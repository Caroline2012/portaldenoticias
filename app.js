const app=require('./config/server.js'); //importaçao de 'app'; 
//(app) significa que estou passando a variável 'app' junto
const rotahome=require('./app/routes/home')(app); //importaçao do arquivo home.js; 
const rotaadmin=require('./app/routes/admin')(app); //importaçao do arquivo admin.js
const rotanoticias=require('./app/routes/noticias')(app); //importaçao do arquivo noticias.js

app.listen('3000', function(){ //criando um servidor na porta 3000; estou executando o 'app'
	console.log('Servidor ON.'); //mensagem no terminal
}); 